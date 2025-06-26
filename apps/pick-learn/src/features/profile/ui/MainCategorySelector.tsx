import { MainCategoryType } from '@/entities/category/api/types';
import { Button } from '@repo/ui/components/base/Button';

interface MainCategorySelectorProps {
    mainCategories: MainCategoryType[];
    selectedMainCategory: MainCategoryType | null;
    onCategorySelect: (category: MainCategoryType) => void;
}

export default function MainCategorySelector({
    mainCategories,
    selectedMainCategory,
    onCategorySelect,
}: MainCategorySelectorProps) {
    const handleCategoryClick = (
        e: React.MouseEvent,
        category: MainCategoryType,
    ) => {
        e.preventDefault();
        e.stopPropagation();
        onCategorySelect(category);
    };

    return (
        <>
            <h3 className='text-sm font-semibold mt-3'>메인 카테고리</h3>
            <ul className='flex flex-wrap gap-2'>
                {mainCategories.map((category) => (
                    <li key={category.id} className='flex items-center gap-2'>
                        <Button
                            variant='outline'
                            className={`p-2.5 font-medium transition-colors duration-200 ease-in-out rounded-sm ${
                                selectedMainCategory?.id === category.id
                                    ? 'bg-primary-100/20 border-primary-500'
                                    : 'hover:bg-primary-100/10'
                            }`}
                            onClick={(e) => handleCategoryClick(e, category)}
                        >
                            {category.name}
                        </Button>
                    </li>
                ))}
            </ul>
        </>
    );
}
