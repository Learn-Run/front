import { z } from 'zod';

export const signUpSchema = z
    .object({
        email: z.string().email('이메일 형식이 올바르지 않습니다.'),
        account: z
            .string()
            .min(4, '아이디는 4자 이상이어야 합니다.')
            .max(20, '아이디는 20자 이하이어야 합니다.'),
        nickname: z.string().min(1, '닉네임을 입력해주세요.'),
        password: z.string().min(6, '비밀번호는 6자 이상이어야 합니다.'),
        passwordConfirm: z.string().min(1, '비밀번호 확인을 입력해주세요.'),
        verificationCode: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: '비밀번호가 일치하지 않습니다.',
        path: ['passwordConfirm'],
    });
