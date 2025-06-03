export interface ProfileType {
    memberUuid: string;
    profileImage: string;
    nickname: string;
    alt: string;
}
//FIXME: 답변자랭커 reponse데이터 수정 후 타입 수정예정
export interface TopAnswererType {
    memberUuid: string;
    profileImage: string;
    nickname: string;
    alt: string;
    selfintroduction: string;
}

export const topAnswererList: TopAnswererType[] = [
    {
        memberUuid: '1',
        profileImage: 'https://picsum.photos/400/400',
        nickname: '핵답러는 나다',
        alt: '핵답러 프로필 이미지',
        selfintroduction: '안녕하세요! 핵답러입니다.',
    },
    {
        memberUuid: '2',
        profileImage: 'https://picsum.photos/400/400',
        nickname: '핵답러',
        alt: '핵답러 프로필 이미지',
        selfintroduction: '열심히 답변하겠습니다.',
    },
    // {
    //     memberUuid: '3',
    //     profileImage: 'https://picsum.photos/400/500',
    //     nickname: '핵답러',
    //     alt: '핵답러 프로필 이미지',
    //     selfintroduction: '최선을 다해 답변드리겠습니다.',
    // },
    // {
    //     memberUuid: '4',
    //     profileImage: 'https://picsum.photos/200/64',
    //     nickname: '핵답러',
    //     alt: '핵답러 프로필 이미지',
    //     selfintroduction: '성실하게 답변하겠습니다.',
    // },
];
