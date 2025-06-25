import { getSubCategory } from '@/entities/category/api';
import { CategoryListType } from '@/entities/profile/api/types';

export default async function MyCategoryList({
    categoryList,
}: {
    categoryList: CategoryListType[];
}) {
    const subCategory = await Promise.all(
        categoryList.map((subCategory) =>
            getSubCategory(subCategory.subCategoryId),
        ),
    );
    return (
        <>
            <h3 className='text-xl font-bold'>카테고리</h3>
            <ul className='flex  gap-2 '>
                {subCategory.map((category) => (
                    <li key={category.id}>
                        <p
                            style={{
                                backgroundColor: `${category.color}20`,
                                color: category.color,
                            }}
                            className='text-sm rounded-sm w-fit py-1 px-1.5 '
                        >
                            {category.name}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    );
}
