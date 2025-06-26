import { CategoryListType } from '@/entities/category/api/types';
import { Button } from '@repo/ui/components/base/Button';

interface SubCategorySelectorProps {
    subCategoryData: CategoryListType[];
    selectedSubCategories: CategoryListType[];
    onSubCategorySelect: (category: CategoryListType) => void;
}

export default function SubCategorySelector({
    subCategoryData,
    selectedSubCategories,
    onSubCategorySelect,
}: SubCategorySelectorProps) {
    const handleSubCategoryClick = (
        e: React.MouseEvent,
        category: CategoryListType,
    ) => {
        e.preventDefault();
        e.stopPropagation();
        onSubCategorySelect(category);
    };

    return (
        <>
            <p className='text-sm font-semibold mt-3'>서브 카테고리</p>
            <ul className='flex flex-wrap gap-2'>
                {subCategoryData.map((category) => {
                    const isSelected = selectedSubCategories.some(
                        (selected) =>
                            selected.subCategoryId === category.subCategoryId,
                    );
                    const isDisabled =
                        !isSelected && selectedSubCategories.length >= 3;

                    return (
                        <li key={category.subCategoryId}>
                            <Button
                                variant='outline'
                                disabled={isDisabled}
                                className={`w-fit transition-colors duration-200 ease-in-out ${
                                    isSelected
                                        ? 'bg-primary-100 text-white hover:bg-primary-100'
                                        : isDisabled
                                          ? 'opacity-50 cursor-not-allowed'
                                          : 'hover:bg-primary-100/10'
                                }`}
                                onClick={(e) =>
                                    handleSubCategoryClick(e, category)
                                }
                            >
                                {category.subCategoryName}
                            </Button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
