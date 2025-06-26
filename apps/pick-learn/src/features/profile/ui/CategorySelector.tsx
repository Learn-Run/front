'use client';
import { useEffect, useState } from 'react';

import { useAlert } from '@/features/post/model/hooks/useAlert';
import { getCategoryList, getMainCategories } from '@/entities/category/api';
import { ProfileCategoryListType } from '@/entities/profile/api/types';
import {
    CategoryListType,
    MainCategoryType,
} from '@/entities/category/api/types';
import {
    SubCategorySelector,
    MainCategorySelector,
    SelectedCategoryList,
} from '.';

interface CategorySelectorProps {
    categoryList?: ProfileCategoryListType[];
    onCategoryChange?: (categories: ProfileCategoryListType[]) => void;
}

export default function CategorySelector({
    categoryList = [],
    onCategoryChange,
}: CategorySelectorProps) {
    const alert = useAlert();

    const [mainCategoryData, setMainCategoryData] = useState<
        MainCategoryType[]
    >([]);
    const [subCategoryData, setSubCategoryData] = useState<CategoryListType[]>(
        [],
    );

    useEffect(() => {
        const fetchMainCategories = async () => {
            const mainCategories = await getMainCategories();
            setMainCategoryData(mainCategories);
        };
        fetchMainCategories();
    }, []);

    const [selectedMainCategory, setSelectedMainCategory] =
        useState<MainCategoryType | null>(null);
    const [selectedSubCategories, setSelectedSubCategories] = useState<
        CategoryListType[]
    >([]);

    useEffect(() => {
        const convertProfileCategories = async () => {
            if (categoryList.length === 0) {
                setSelectedSubCategories([]);
                return;
            }

            const convertedCategories: CategoryListType[] = [];

            for (const profileCategory of categoryList) {
                try {
                    const mainCategory = mainCategoryData.find(
                        (cat) => cat.id === profileCategory.mainCategoryId,
                    );
                    if (!mainCategory) continue;

                    const subCategoryResponse = await getCategoryList(
                        profileCategory.mainCategoryId,
                    );
                    const subCategory = subCategoryResponse.find(
                        (sub) =>
                            sub.subCategoryId === profileCategory.subCategoryId,
                    );

                    if (subCategory) {
                        convertedCategories.push(subCategory);
                    }
                } catch (error) {
                    console.error('카테고리 변환 중 오류:', error);
                    alert.error('카테고리 변환 중 오류가 발생했습니다.');
                }
            }

            setSelectedSubCategories(convertedCategories);
        };

        if (mainCategoryData.length > 0) {
            convertProfileCategories();
        }
    }, [categoryList, mainCategoryData, alert]);

    useEffect(() => {
        if (onCategoryChange) {
            const profileCategories: ProfileCategoryListType[] =
                selectedSubCategories.map((category) => ({
                    mainCategoryId: category.mainCategoryId,
                    subCategoryId: category.subCategoryId,
                }));
            onCategoryChange(profileCategories);
        }
    }, [selectedSubCategories, onCategoryChange]);

    const handleMainCategorySelect = async (category: MainCategoryType) => {
        const response = await getCategoryList(category.id);
        setSubCategoryData(response);
        setSelectedMainCategory(category);
    };

    const handleSubCategorySelect = (category: CategoryListType) => {
        const isAlreadySelected = selectedSubCategories.some(
            (selected) => selected.subCategoryId === category.subCategoryId,
        );

        if (isAlreadySelected) {
            setSelectedSubCategories((prev) =>
                prev.filter(
                    (selected) =>
                        selected.subCategoryId !== category.subCategoryId,
                ),
            );
        } else {
            if (selectedSubCategories.length >= 3) {
                alert.error('카테고리는 최대 3개까지만 선택할 수 있습니다.');
                return;
            }
            setSelectedSubCategories((prev) => [...prev, category]);
        }
    };

    const handleRemoveCategory = (categoryId: number) => {
        setSelectedSubCategories((prev) =>
            prev.filter((category) => category.subCategoryId !== categoryId),
        );
    };

    return (
        <>
            <MainCategorySelector
                mainCategories={mainCategoryData}
                selectedMainCategory={selectedMainCategory}
                onCategorySelect={handleMainCategorySelect}
            />

            {selectedMainCategory && (
                <SubCategorySelector
                    subCategoryData={subCategoryData}
                    selectedSubCategories={selectedSubCategories}
                    onSubCategorySelect={handleSubCategorySelect}
                />
            )}

            <SelectedCategoryList
                selectedSubCategories={selectedSubCategories}
                onRemoveCategory={handleRemoveCategory}
            />
        </>
    );
}
