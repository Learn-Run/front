import { XIcon } from 'lucide-react';

import { CategoryListType } from '@/entities/category/api/types';

interface SelectedCategoryListProps {
    selectedSubCategories: CategoryListType[];
    onRemoveCategory: (categoryId: number) => void;
}

export default function SelectedCategoryList({
    selectedSubCategories,
    onRemoveCategory,
}: SelectedCategoryListProps) {
    return (
        <div className='mt-6 p-4 bg-gray-50 rounded-lg'>
            <p className='text-sm font-semibold mb-3'>
                선택된 카테고리 ({selectedSubCategories.length}/3)
            </p>

            <div className='flex flex-wrap gap-2'>
                {selectedSubCategories.map((category) => (
                    <div
                        key={category.subCategoryId}
                        className='flex items-center justify-center gap-1 px-2 py-1 border-gray-500 rounded-sm relative'
                    >
                        <span className='px-1 flex items-center justify-center'>
                            {category.subCategoryName}
                        </span>
                        <button
                            onClick={() =>
                                onRemoveCategory(category.subCategoryId)
                            }
                        >
                            <XIcon className='absolute top-0 right-0 w-3 h-3 text-gray-700' />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
