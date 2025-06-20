import { BreadCrumb } from '@/shared/assets/icons';
import { AskDetailType } from '@/entities/post/api/types';
import { getOneMainCategory, getSubCategory } from '@/entities/category/api';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export default async function PostDetailCategorySection({
    category,
}: {
    category: AskDetailType;
}) {
    const mainCategory = await getOneMainCategory(category.mainCategoryId);
    const subCategory = await getSubCategory(category.subCategoryId);
    return (
        <SectionWrapper>
            <div className='flex items-center gap-x-2 border border-primary-100 rounded-full w-fit p-2 '>
                <p className='text-sm'>{mainCategory?.name}</p>
                <BreadCrumb />
                <p className='text-sm'>{subCategory?.name}</p>
            </div>
        </SectionWrapper>
    );
}
