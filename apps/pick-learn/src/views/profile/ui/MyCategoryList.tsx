import { getSubCategory } from '@/entities/category/api';
import { ProfileCategoryListType } from '@/entities/profile/api/types';

export default async function MyCategoryList({
    categoryList,
}: {
    categoryList: ProfileCategoryListType[];
}) {
    if (!categoryList)
        return <p className='text-gray-600'> 카테고리를 선택해주세요</p>;
    const subCategory = await Promise.all(
        categoryList.map((subCategory) =>
            getSubCategory(subCategory.subCategoryId),
        ),
    );
    return (
        <>
            <ul className='flex gap-2 '>
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
