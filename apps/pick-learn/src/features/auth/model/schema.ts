import { z } from 'zod';

export const signUpSchema = z
    .object({
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
            .refine(
                (verified) => verified === true,
                '닉네임 중복 검사를 해주세요',
            ),

        loginId: z
            .string()
            .min(4, '아이디는 4자 이상이어야 합니다')
            .max(20, '아이디는 20자 이하여야 합니다')
            .regex(
                /^[a-zA-Z0-9]+$/,
                '아이디는 특수문자, 공백 없이 입력해주세요',
            ),

        loginIdVerified: z
            .boolean()
            .refine(
                (verified) => verified === true,
                '아이디 중복 검사를 해주세요',
            ),

        password: z
            .string()
            .min(8, '비밀번호는 8자 이상이어야 합니다')
            .max(20, '비밀번호는 20자 이하여야 합니다')
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                '비밀번호는 영문 대소문자와 특수문자를 포함해야 합니다',
            ),

        passwordConfirm: z.string(),

        selfIntro: z
            .string()
            .max(500, '자기소개는 500자 이하여야 합니다')
            .optional(),

        birthDate: z.date({
            required_error: '생년월일을 입력해주세요',
        }),

        gender: z.enum(['남성', '여성'], {
            errorMap: () => ({ message: '성별을 선택해주세요' }),
        }),

        email: z.string().email('올바른 이메일 형식이 아닙니다'),

        verificationCode: z
            .string()
            .min(6, '인증 코드는 6자 이상이어야 합니다'),

        isEmailVerified: z.boolean().refine((verified) => verified === true, {
            message: '이메일 인증이 필요합니다',
        }),

        agreementCheckList: z
            .array(z.string())
            .min(1, '약관에 1개 이상 동의해야 가입할 수 있습니다'),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        path: ['passwordConfirm'],
        message: '비밀번호가 일치하지 않습니다',
    });

export type SignUpSchemaType = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
    loginId: z
        .string()
        .min(4, '아이디는 4자 이상이어야 합니다')
        .max(20, '아이디는 20자 이하여야 합니다')
        .regex(/^[a-zA-Z0-9]+$/, '아이디는 특수문자, 공백 없이 입력해주세요'),

    password: z
        .string()
        .min(8, '비밀번호는 8자 이상이어야 합니다')
        .max(20, '비밀번호는 20자 이하여야 합니다')
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
            '비밀번호는 영문 대소문자와 특수문자를 포함해야 합니다',
        ),
});

export type SignInSchemaType = z.infer<typeof signInSchema>;
