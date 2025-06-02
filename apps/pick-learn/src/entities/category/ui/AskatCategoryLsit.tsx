import CategoryNameItem from './CategoryNameItem';
import { getMainCategories } from '../api';

export default async function AskatMainCategoryName() {
    const categoryList = await getMainCategories();

    return (
        <ul className='flex items-center justify-center flex-wrap gap-4 2xl:max-w-[60%] mx-auto'>
            {categoryList.map((category) => (
                <CategoryNameItem key={category.id} text={category.name} />
            ))}
        </ul>
    );
}
