import type { GenderType } from '../model/types';

export interface SignInResponseType {
    accessToken: string;
    memberUuid: string;
}

export interface AgreeTermUuidType {
    agreementUuid: string;
}

export interface AgreeTermType {
    agreementUuid: string;
    agreementName: string;
    agreementContent: string;
    required: boolean;
}

export interface RequestSignUpDataType {
    name: string;
    loginId: string;
    password: string;
    email: string;
    birthDate: string;
    gender: GenderType;
    nickname: string;
    agreementCheckList: {
        agreementUuid: string;
        agreementStatus: boolean;
    }[];
    userRole: '일반회원';
}
