'use client';

import {
    createCategoryList,
    createMainCategory,
    createSubCategory,
} from '@/entities/category/api';
import {
    categoryList,
    mainCategoryList,
    subCategoryList,
} from '@/entities/category/api/constants';

export default function CreateCategoryButton() {
    const handleCreateMainCategory = async () => {
        await Promise.all(
            mainCategoryList.map(async (category) => {
                await createMainCategory(
                    category.name,
                    category.iconUrl,
                    category.alt,
                );
            }),
        );
    };

    const handleCreateSubCategory = async () => {
        await Promise.all(
            subCategoryList.map(async (category) => {
                await createSubCategory(category.name, category.color);
            }),
        );
    };

    const handleCreateCategoryList = async () => {
        await Promise.all(
            categoryList.map(async (category) => {
                await createCategoryList(
                    category.mainCategoryId,
                    category.subCategoryId,
                );
            }),
        );
    };
    return (
        <>
            <button onClick={handleCreateMainCategory}>
                메인카테고리 생성
            </button>
            <button onClick={handleCreateSubCategory}>서브카테고리 생성</button>
            <button onClick={handleCreateCategoryList}>
                카테고리 리스트 생성
            </button>
        </>
    );
}
