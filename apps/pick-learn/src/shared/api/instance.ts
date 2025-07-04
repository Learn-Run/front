import { getServerSession } from 'next-auth';

import { CommonResponse } from './types';
import { options as authOptions } from '@/app/api/auth/[...nextauth]/options';

interface NextFetchRequestConfig {
    tags?: string[];
    revalidate?: number | false;
}

interface RequestOptions extends RequestInit {
    isMultipart?: boolean;
    requireAuth?: boolean;
    cache?: RequestCache;
    tags?: string[];
    revalidate?: number | false;
}

const BASE_URL = process.env.BASE_API_URL || 'http://localhost:8000';

const fetchInstance = async <T = undefined>(
    url: string,
    options: RequestOptions = {},
): Promise<CommonResponse<T>> => {
    options.requireAuth ??= false;

    try {
        const headers: Record<string, string> = {
            ...(options.headers as Record<string, string>),
        };

        if (options.requireAuth !== false) {
            try {
                const session = await getServerSession(authOptions);

                const accessToken = session?.user?.accessToken;
                const memberUuid = session?.user.memberUuid;

                if (accessToken && memberUuid) {
                    headers.Authorization = `Bearer ${accessToken}`;
                    headers['X-Member-UUID'] = memberUuid;
                } else {
                    throw new Error('인증이 필요합니다');
                }
            } catch (authError) {
                console.error('인증 오류:', authError);
                throw new Error('인증 실패');
            }
        }

        if (options.body instanceof FormData) {
            delete headers['Content-Type'];
        } else {
            headers['Content-Type'] = 'application/json';
            if (typeof options.body === 'object') {
                options.body = JSON.stringify(options.body);
            }
        }

        const nextOptions: NextFetchRequestConfig = {};

        if (options.tags && options.tags.length > 0) {
            nextOptions.tags = options.tags;
        }

        if (options.revalidate !== undefined) {
            nextOptions.revalidate = options.revalidate;
        }

        const response = await fetch(`${BASE_URL}${url}`, {
            ...options,
            headers,
            cache: options.cache,
            next: Object.keys(nextOptions).length > 0 ? nextOptions : undefined,
        });

        const contentType = response.headers.get('content-type');
        if (!contentType?.includes('application/json')) {
            console.error('Unexpected content type:', contentType);
            const text = await response.text();
            console.error('Response text:', text);
            throw new Error('Invalid response format');
        }

        const result = (await response.json()) as CommonResponse<T>;

        if (!response.ok) {
            console.error('API Error:', result);
        }

        return result;
    } catch (error) {
        console.error('Fetch error:', error);

        return {
            httpStatus: 'INTERNAL_SERVER_ERROR',
            message: error instanceof Error ? error.message : 'Unknown error',
            code: 500,
            result: null as T,
        } as CommonResponse<T>;
    }
};

export const fetchData = {
    get: async <T>(
        url: string,
        options: Omit<RequestOptions, 'body' | 'method'> = {},
    ) => {
        return fetchInstance<T>(url, { method: 'GET', ...options });
    },

    post: async <T>(
        url: string,
        options: Omit<RequestOptions, 'method'> = {},
    ) => {
        return fetchInstance<T>(url, { method: 'POST', ...options });
    },

    patch: async <T>(
        url: string,
        options: Omit<RequestOptions, 'method'> = {},
    ) => {
        return fetchInstance<T>(url, { method: 'PATCH', ...options });
    },

    put: async <T>(
        url: string,
        options: Omit<RequestOptions, 'method'> = {},
    ) => {
        return fetchInstance<T>(url, { method: 'PUT', ...options });
    },

    delete: async <T>(
        url: string,
        options: Omit<RequestOptions, 'method'> = {},
    ) => {
        return fetchInstance<T>(url, { method: 'DELETE', ...options });
    },
};
