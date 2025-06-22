import { getOneMainCategory, getSubCategory } from '@/entities/category/api';
import { AskDetailType } from '@/entities/post/api/types';
import { BreadCrumb } from '@/shared/assets/icons';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export default async function BreadCrumbSection({
    postDetail,
}: {
    postDetail: AskDetailType;
}) {
    const mainCategory = await getOneMainCategory(postDetail.mainCategoryId);
    const subCategory = await getSubCategory(postDetail.subCategoryId);

    return (
        <SectionWrapper className='w-full max-w-[1240px]'>
            <ul className='flex items-center gap-x-2'>
                <li className='font-medium text-gray-600'>Home</li>
                <BreadCrumb />
                <li className='font-medium text-gray-600'>질문하기</li>
                <BreadCrumb />
                <li className='font-medium text-gray-600'>
                    {mainCategory?.name}
                </li>
                <BreadCrumb />
                <li className='font-medium text-gray-600'>
                    {subCategory?.name}
                </li>
                <BreadCrumb />
                <li className='font-bold text-primary-100'>
                    {postDetail.title}
                </li>
            </ul>
        </SectionWrapper>
    );
}
