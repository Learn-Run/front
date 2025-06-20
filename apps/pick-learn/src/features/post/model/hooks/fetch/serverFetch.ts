/* eslint-disable @typescript-eslint/no-explicit-any */
const API_BASE_URL = process.env.HPE_DEVELOP_API_URL || '';
const DEFAULT_TIMEOUT = 8000; // 기본 타임아웃 8초

/**
 * 서버 환경에서 사용하는 공통 fetch 함수
 *
 * - 기본적으로 `no-store` 캐시를 사용하여 항상 fresh 데이터를 가져옵니다.
 * - JSON 응답은 자동 파싱되고, 기타 응답은 text로 반환됩니다.
 * - 오류 발생 시 `{ status, statusText, errorContent }` 형태의 객체를 throw합니다.
 * - 타임아웃이 발생할 경우 `408 Request Timeout` 형태로 일관된 에러를 던집니다.
 *
 * @template T 반환 데이터 타입
 * @param {string} url - 요청할 API 경로 또는 절대 URL
 * @param {RequestInit & { cache?: RequestCache; timeout?: number; next?: {revalidate?: number | false; tags?: string[];} }} [options] - fetch 옵션
 * @param {RequestCache} [options.cache='no-store'] - 캐시 동작 설정 (기본값: no-store)
 * @param {number} [options.timeout=8000] - 타임아웃 설정 (밀리초 단위, 기본값: 8000ms)
 *
 * @returns {Promise<T>} - 응답 데이터 (JSON 또는 text)
 *
 * @throws {{
 *   status: number;
 *   statusText: string;
 *   errorContent: unknown;
 * }} - 서버에서 실패한 경우 또는 타임아웃 발생 시 에러 객체를 던집니다.
 */
export async function serverFetch<T = unknown>(
    url: string,
    options?: RequestInit & {
        cache?: RequestCache; // 캐시 옵션 'default' | 'no-store' | 'reload' | 'force-cache' | 'only-if-cached'
        timeout?: number; // timeout (ms 단위)
        next?: {
            revalidate?: number | false;
            tags?: string[];
        };
    },
): Promise<T> {
    const controller = new AbortController();
    const timeout = options?.timeout ?? DEFAULT_TIMEOUT;
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const headers = new Headers(options?.headers);
        const requestUrl = url.startsWith('http')
            ? url
            : `${API_BASE_URL}${url}`;

        const res = await fetch(requestUrl, {
            ...options,
            headers,
            cache: options?.cache ?? 'no-store',
            next: options?.next,
            signal: controller.signal,
        });
        clearTimeout(timeoutId); // 타이머 해제
        const contentType = res.headers.get('Content-Type');

        if (!res.ok) {
            const errorContent = contentType?.includes('application/json')
                ? await res.json()
                : await res.text();
            throw {
                status: res.status,
                statusText: res.statusText,
                errorContent,
            };
        }

        return contentType?.includes('application/json')
            ? res.json()
            : (res.text() as unknown as T);
    } catch (error: any) {
        clearTimeout(timeoutId);
        console.error('[serverFetch]', url, error);

        // 타임아웃
        if (error?.name === 'AbortError') {
            throw {
                status: 408,
                statusText: 'Request Timeout',
                errorContent: '요청 시간이 초과되었습니다',
            };
        }

        throw error;
    }
}
