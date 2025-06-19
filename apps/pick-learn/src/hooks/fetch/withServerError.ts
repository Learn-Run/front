/* eslint-disable @typescript-eslint/no-explicit-any */

export type ServerActionResult<T = unknown> =
    | { success: true; data: T }
    | { success: false; error: any };

/**
 * 서버 액션에서 공통적으로 사용할 수 있는 에러 핸들링 유틸 함수입니다.
 *
 * - 내부에서 실행된 비동기 함수 `fn`을 실행하고, 에러가 발생하면 `success: false`로 감싸 반환합니다.
 * - try-catch를 반복 작성하지 않고도 일관된 형태의 결과를 반환할 수 있게 도와줍니다.
 * - 주로 Next.js 서버 액션(`'use server'`) 내에서 사용합니다.
 *
 * @template T 성공 시 반환할 데이터 타입
 * @param {() => Promise<T>} fn 실행할 비동기 함수
 *
 * @returns {Promise<ServerActionResult<T>>} 성공 시 `{ success: true, data }`, 실패 시 `{ success: false, error }`
 *
 * @example
 * ```ts
 * const result = await withServerError(() => serverFetch('/api/user'));
 *
 * if (!result.success) {
 *   alert(result.error); // 에러 메시지 띄우기
 * } else {
 *   console.log(result.data); // 정상 데이터 사용
 * }
 * ```
 */
export async function withServerError<T>(
    fn: () => Promise<T>,
): Promise<ServerActionResult<T>> {
    try {
        const data = await fn();
        console.log('withServerError data', data);
        return { success: true, data };
    } catch (error: any) {
        console.error('[withServerError]', error);
        return {
            success: false,
            error: error ?? '서버 오류',
        };
    }
}
