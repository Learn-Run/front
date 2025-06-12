import { routes } from '@/shared/model/constants/routes';
import type { SignUpStepsType } from './types';
import { SignUpStep1, SignUpStep2, SignUpStep3 } from '../ui';
import { OAuthSignUpSchemaType, SignUpSchemaType } from './schema';
import OAuthSignUpStep2 from '../ui/steps/OAuthSignUpStep2';

export const withAuthList: string[] = [routes.chat];
export const withOutAuthList = [routes.signIn, routes.signUp];

export const signUpSteps: SignUpStepsType[] = [
    {
        id: 1,
        requiredFields: [],
        component: SignUpStep1,
    },
    {
        id: 2,
        requiredFields: [
            'name',
            'nickname',
            'nicknameVerified',
            'loginId',
            'loginIdVerified',
            'password',
            'passwordConfirm',
        ],
        component: SignUpStep2,
    },
    {
        id: 3,
        requiredFields: [
            'email',
            'verificationCode',
            'isEmailVerified',
            'gender',
            'birthDate',
        ],
        component: SignUpStep3,
    },
];

export const DEFAULT_FORM_VALUES: SignUpSchemaType = {
    name: '',
    nickname: '',
    nicknameVerified: false,
    loginId: '',
    loginIdVerified: false,
    password: '',
    passwordConfirm: '',
    email: '',
    verificationCode: '',
    isEmailVerified: false,
    gender: '남성',
    birthDate: new Date(),
    agreementCheckList: [],
};

export const oauthSignUpSteps = [
    {
        id: 1,
        requiredFields: [],
        component: SignUpStep1,
    },
    {
        id: 2,
        requiredFields: ['name', 'nickname', 'nicknameVerified'],
        component: OAuthSignUpStep2,
    },
    {
        id: 3,
        requiredFields: [
            'email',
            'verificationCode',
            'isEmailVerified',
            'gender',
            'birthDate',
        ],
        component: SignUpStep3,
    },
];

export const OAUTH_DEFAULT_FORM_VALUES: OAuthSignUpSchemaType = {
    name: '',
    nickname: '',
    nicknameVerified: false,
    email: '',
    verificationCode: '',
    isEmailVerified: false,
    gender: '남성',
    birthDate: new Date(),
    agreementCheckList: [],
};

export const genderOptions = [
    { id: 1, label: '남성', value: '남성' },
    { id: 2, label: '여성', value: '여성' },
];

export const agreementList: {
    agreementName: string;
    agreementContent: string;
    required: boolean;
}[] = [
    {
        agreementName: '홈페이지 이용약관 동의',
        agreementContent:
            '제1조 (목적)이 약관은 Pick And Learn(이하 "회사"라 함)이 제공하는 서비스의 이용조건 및 절차, 회사와 회원 간의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.제2조 (용어의 정의)이 약관에서 사용하는 용어의 정의는 다음과 같습니다.1. "서비스"란 회사가 제공하는 모든 서비스를 의미합니다.2. "회원"이란 회사와 서비스 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 자를 의미합니다.3. "아이디(ID)"란 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다.제3조 (약관의 효력 및 변경)1. 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공지함으로써 효력이 발생합니다.2. 회사는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 변경된 약관은 서비스 화면에 공지함으로써 효력이 발생합니다.',
        required: true,
    },
    {
        agreementName: '개인정보 수집 및 이용동의',
        agreementContent:
            '1. 개인정보 수집 항목- 필수 항목: 이름, 이메일 주소, 비밀번호, 휴대전화번호- 선택 항목: 프로필 이미지2. 개인정보 수집 및 이용 목적- 회원 식별 및 회원제 서비스 제공- 서비스 이용에 따른 본인확인, 개인 식별- 불만처리 등 민원처리, 고지사항 전달3. 개인정보 보유 및 이용 기간회사는 회원탈퇴 시 또는 수집 및 이용목적이 달성되거나 보유 및 이용기간이 종료한 경우 해당 개인정보를 지체 없이 파기합니다. 단, 관계법령에 의해 보관해야 하는 정보는 법정 보관기간 동안 보관됩니다.',
        required: true,
    },
    {
        agreementName: '만 14세 이상입니다',
        agreementContent:
            '회사가 제공하는 서비스는 만 14세 이상을 대상으로 하며, 만 14세 미만의 아동은 회원 가입 및 서비스 이용이 제한됩니다.본인은 만 14세 이상이며, 이에 따라 본 약관 및 개인정보 수집·이용에 대한 동의 권한이 있음을 확인합니다.',
        required: true,
    },
    {
        agreementName: '마케팅 정보 수신 동의',
        agreementContent:
            '목적 : 마케팅 정보 활용 (행사 정보 안내 등)항목 : 휴대전화번호, 이메일보유 및 이용 기간 : 회원 탈퇴 시까지* 귀하께서는 동의를 거부하실 수 있으나, 동의를 거부 하실 경우 마케팅 정보를 받으실 수 없습니다.',
        required: false,
    },
];
