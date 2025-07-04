import { getSubCategory } from '@/entities/category/api';

export default async function TopAskSubCategory({
    subCategoryId,
}: {
    subCategoryId: number;
}) {
    const subCategory = await getSubCategory(subCategoryId);

    if (!subCategory) return;

    return (
        <p
            style={{
                backgroundColor: `${subCategory.color}20`,
                color: subCategory.color,
            }}
            className='text-sm rounded-full w-fit py-1 px-1.5 my-5'
        >
            {subCategory.name}
        </p>
    );
}
