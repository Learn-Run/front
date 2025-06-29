import { getServerSession } from 'next-auth';

import { options } from '@/app/api/auth/[...nextauth]/options';
import { getOneMainCategory, getSubCategory } from '@/entities/category/api';
import { AskDetailType } from '@/entities/post/api/types';
import { BreadCrumb } from '@/shared/assets/icons';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import PostDetailEditButton from './PostDetailEditButton';
import PostDetailDeleteButton from './PostDetailDeleteButton';

export default async function BreadCrumbSection({
    postDetail,
}: {
    postDetail: AskDetailType;
}) {
    const mainCategory = await getOneMainCategory(postDetail.mainCategoryId);
    const subCategory = await getSubCategory(postDetail.subCategoryId);
    const session = await getServerSession(options);
    const myMemberUuid = session?.user?.memberUuid;
    const isMyProfile = myMemberUuid === postDetail.memberUuid;

    return (
        <SectionWrapper className='w-full max-w-[1240px]'>
            <div className='flex items-center justify-between'>
                <ul className='flex items-center gap-x-2 text-sm md:text-base overflow-hidden whitespace-nowrap'>
                    <li className='font-medium text-gray-600'>Home</li>
                    <BreadCrumb />
                    <li className='font-medium text-gray-600'>질문하기</li>
                    <BreadCrumb />
                    <li className='font-medium text-gray-600 hidden md:block'>
                        {mainCategory?.name}
                    </li>
                    <BreadCrumb className='hidden md:block' />
                    <li className='font-medium text-gray-600 hidden md:block'>
                        {subCategory?.name}
                    </li>
                    <BreadCrumb className='hidden md:block' />
                    <li className='font-bold text-primary-100'>
                        {postDetail.title}
                    </li>
                </ul>

                {isMyProfile && (
                    <div className='flex  gap-x-2'>
                        <PostDetailEditButton postUuid={postDetail.postUuid} />
                        <PostDetailDeleteButton />
                    </div>
                )}
            </div>
        </SectionWrapper>
    );
}
