import React from 'react';
import CategoryNameItem from './CategoryNameItem';

export default function AskAtCategoryList() {
    const categories = [
        'Technology',
        'Health',
        'Education',
        'Finance',
        'Entertainment',
        'Travel',
        'Lifestyle',
        'Food',
    ];
    return (
        <ul className='flex items-center justify-center flex-wrap gap-2 2xl:max-w-[60%] mx-auto'>
            {categories.map((category, index) => (
                <CategoryNameItem key={index} text={category} />
            ))}
        </ul>
    );
}
