import z from 'zod';

export const nickNameEditSchema = z.object({
    name: z.string({
        required_error: '이름을 입력해주세요',
    }),

    nickname: z
        .string()
        .min(2, '닉네임은 2자 이상이어야 합니다')
        .max(12, '닉네임은 12자 이하여야 합니다')
        .regex(
            /^[가-힣a-zA-Z0-9]+$/,
            '닉네임은 특수문자, 공백 없이 입력해주세요',
        ),

    nicknameVerified: z
        .boolean()
        .refine((verified) => verified === true, '닉네임 중복 검사를 해주세요'),
});
