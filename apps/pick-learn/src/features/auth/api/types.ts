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
