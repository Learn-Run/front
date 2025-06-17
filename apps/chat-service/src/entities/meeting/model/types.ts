// FIXME: API 설게 이후 타입 변경 예정
export interface MeetingType {
    meetingUuid: string;
    title: string;
    createdAt: string;
    participants: {
        memberUuid: string;
        nickname: string;
        profileImage: {
            type: 'image';
            imageUrl: string;
            alt: string;
        };
        gradeName: string;
        selfIntroduction: string;
        categoryListIds: number[];
    }[];
}
