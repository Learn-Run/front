import {
    RequestOAuthSignUpDataType,
    RequestSignUpDataType,
} from '../api/types';
import { OAuthSignUpSchemaType, SignUpSchemaType } from '../model/schema';

export function toAgreementCheckList(agreementCheckList: string[]) {
    return agreementCheckList.map((item) => ({
        agreementUuid: item,
        agreementStatus: true,
    }));
}

export function toOAuthSignUpData(
    data: OAuthSignUpSchemaType,
    provider: string,
    providerId: string,
): RequestOAuthSignUpDataType {
    return {
        name: data.nickname,
        email: data.email,
        birthDate: data.birthDate.toISOString(),
        gender: data.gender,
        nickname: data.nickname,
        agreementCheckList: toAgreementCheckList(data.agreementCheckList),
        provider: provider.toUpperCase(),
        providerAccountId: providerId,
    };
}

export function toCredentialSignUpData(
    data: SignUpSchemaType,
): RequestSignUpDataType {
    return {
        name: data.nickname,
        loginId: data.loginId,
        password: data.password,
        email: data.email,
        birthDate: data.birthDate.toISOString(),
        gender: data.gender,
        nickname: data.nickname,
        agreementCheckList: toAgreementCheckList(data.agreementCheckList),
    };
}
