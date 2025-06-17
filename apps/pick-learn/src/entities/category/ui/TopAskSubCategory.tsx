import { getCategoryListByCategoryListId } from '@/entities/category/api';

export default async function TopAskSubCategory({ item }: { item: number }) {
    const categoryList = await getCategoryListByCategoryListId(item);
    if (!categoryList) return;

    return (
        <p
            style={{
                backgroundColor: `${categoryList.subCategoryColor}20`,
                color: categoryList.subCategoryColor,
            }}
            className='text-sm rounded-full w-fit py-1 px-1.5 my-5'
        >
            {categoryList.subCategoryName}
        </p>
    );
}
