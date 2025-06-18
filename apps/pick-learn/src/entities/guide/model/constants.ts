import { PopularAsker, StepAnswer, StepSearch } from '@/shared/assets/icons';
import monster from '../../../../public/images/monster.png';
import monster2 from '../../../../public/images/SearchMonster.png';
import monster3 from '../../../../public/images/StepAnswererMonster.png';

export const stepList = [
    {
        id: 1,
        title: '인기 질문자',
        description:
            'Upload your resume, fill in your skills, and set job preferences',
        icon: PopularAsker,
        monster: monster,
    },
    {
        id: 2,
        title: '검색 및 찜하기 ',
        description:
            'Explore thousands of job listings and apply with one click',
        icon: StepSearch,
        monster: monster2,
    },
    {
        id: 3,
        title: '답변하기',
        description:
            'Schedule interviews, negotiate offers, and start your new job',
        icon: StepAnswer,
        monster: monster3,
    },
];
