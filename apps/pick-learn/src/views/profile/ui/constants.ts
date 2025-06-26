import { routes } from '@/shared/model/constants/routes';

export const menuItems = (memberUuid: string) => [
    {
        title: '리뷰 내역',
        type: 'REVIEW_GROUP',
        subItems: [
            {
                title: '받은 리뷰',
                href: `${routes.profile}/${memberUuid}?type=REVIEW_RECEIVED`,
                type: 'REVIEW_RECEIVED',
            },
            {
                title: '작성한 리뷰',
                href: `${routes.profile}/${memberUuid}?type=REVIEW_WRITE`,
                type: 'REVIEW_WRITE',
            },
        ],
    },
    {
        title: '질문 내역',
        href: `${routes.profile}/${memberUuid}?type=POST`,
        type: 'POST',
    },
    {
        title: '답변 내역',
        href: `${routes.profile}/${memberUuid}?type=COMMENT`,
        type: 'COMMENT',
    },
];

export const mobileMenuItems = (memberUuid: string) => [
    {
        title: '받은 리뷰',
        href: `${routes.profile}/${memberUuid}?type=REVIEW_RECEIVED`,
        type: 'REVIEW_RECEIVED',
    },
    {
        title: '작성한 리뷰',
        href: `${routes.profile}/${memberUuid}?type=REVIEW_WRITE`,
        type: 'REVIEW_WRITE',
    },
    {
        title: '질문 내역',
        href: `${routes.profile}/${memberUuid}?type=POST`,
        type: 'POST',
    },
    {
        title: '답변 내역',
        href: `${routes.profile}/${memberUuid}?type=COMMENT`,
        type: 'COMMENT',
    },
];
