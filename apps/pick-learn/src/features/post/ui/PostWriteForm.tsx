'use client';
import { useRouter } from 'next/navigation';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useMemo, useState } from 'react';

import { getMainCategories, getCategoryList } from '@/entities/category/api';
import {
    CategoryListType,
    MainCategoryType,
} from '@/entities/category/api/types';
import { SelectBox } from '@/shared/ui/SelectBox';
import { InputType } from '@/shared/ui/wrapper/InputWrap';
import { Button } from '@repo/ui/components/base/Button';
import { postWriteSchema, PostWriteSchemaType } from '../model/schema';
import { createPost, updatePost } from '../api';
import { useAlert } from '../model/hooks/useAlert';
import { routes } from '@/shared/model/constants/routes';

export interface PostFormDataType {
    mainCategoryId: number;
    subCategoryId: number;
    title: string;
    contents: string;
}

interface PostWriteFormProps {
    mode?: 'create' | 'edit';
    postId?: string;
    initialData?: PostFormDataType;
}

function PostWriteForm({
    mode = 'create',
    postId,
    initialData,
}: PostWriteFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const {
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<PostWriteSchemaType>({
        resolver: zodResolver(postWriteSchema),
        mode: 'onChange',
        defaultValues: initialData || {
            mainCategoryId: 0,
            subCategoryId: 0,
            title: '',
            contents: '',
        },
    });

    const alert = useAlert();
    const router = useRouter();
    const fields = useWatch<PostWriteSchemaType>({
        control,
        name: ['mainCategoryId', 'subCategoryId', 'title', 'contents'],
    });

    const isFormValid = useMemo(() => {
        return (
            fields.every((field) => field !== undefined && field !== '') &&
            Object.keys(errors).length === 0
        );
    }, [fields, errors]);

    const [mainCategoryData, setMainCategoryData] = useState<
        MainCategoryType[]
    >([]);

    const [subCategoryData, setSubCategoryData] = useState<CategoryListType[]>([
        {
            id: 1,
            mainCategoryId: 0,
            mainCategoryName: '',
            subCategoryId: 0,
            subCategoryName: '메인카테고리를 선택하세요.',
            subCategoryColor: '',
        },
    ]);

    // 선택된 메인카테고리와 서브카테고리 아이템
    const [selectedMainCategory, setSelectedMainCategory] = useState<
        MainCategoryType | undefined
    >();
    const [selectedSubCategory, setSelectedSubCategory] = useState<
        CategoryListType | undefined
    >();

    useEffect(() => {
        const fetchMainCategoryData = async () => {
            const response = await getMainCategories();
            setMainCategoryData(response);
        };
        fetchMainCategoryData();
    }, []);

    // 수정 모드일 때 초기 데이터 설정
    useEffect(() => {
        if (mode === 'edit' && initialData && mainCategoryData.length > 0) {
            // 메인카테고리 찾기
            const mainCategory = mainCategoryData.find(
                (cat) => cat.id === initialData.mainCategoryId,
            );
            if (mainCategory) {
                setSelectedMainCategory(mainCategory);
                // 서브카테고리 데이터 로드
                handleMainCategorySelectBox(mainCategory);
            }
        }
    }, [mode, initialData, mainCategoryData]);

    // 서브카테고리 데이터가 로드되면 선택된 서브카테고리 설정
    useEffect(() => {
        if (mode === 'edit' && initialData && subCategoryData.length > 1) {
            const subCategory = subCategoryData.find(
                (cat) => cat.subCategoryId === initialData.subCategoryId,
            );
            if (subCategory) {
                setSelectedSubCategory(subCategory);
            }
        }
    }, [mode, initialData, subCategoryData]);

    useEffect(() => {
        const contents = watch('contents');

        if (contents === '<p></p>') {
            setValue('contents', '');
        }
    }, [fields, setValue, watch]);

    const handleMainCategorySelectBox = (item: MainCategoryType) => {
        const fetchSubCategoryData = async () => {
            const response = await getCategoryList(item.id);
            setSubCategoryData(response);
        };
        fetchSubCategoryData();
    };

    const onSubmit = async (data: PostWriteSchemaType) => {
        setIsLoading(true);
        try {
            console.log('data:', data);

            if (mode === 'edit' && postId) {
                await updatePost(postId, data);
                alert.basic('질문이 성공적으로 수정되었습니다.');
            } else {
                await createPost(data);
                alert.basic('질문이 성공적으로 작성되었습니다.');
            }

            setIsLoading(false);
            router.push(`${routes.post}`);
        } catch (error) {
            console.log(' ~ onSubmit ~ error:', error);
            setIsLoading(false);
            const errorMessage =
                mode === 'edit'
                    ? '질문 수정에 실패했습니다.'
                    : '질문 작성에 실패했습니다.';
            alert.error(errorMessage);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-5 pt-10 pb-40 container mx-auto max-w-[1240px] px-4 lg:px-0'
        >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-5 '>
                <Controller
                    control={control}
                    name='mainCategoryId'
                    render={({ field }) => (
                        <div>
                            <SelectBox
                                id='mainCategoryId'
                                title={'카테고리'}
                                required
                                disabled={isLoading}
                                className='w-full'
                                onSelect={(item) => {
                                    field.onChange(item.id);
                                    setSelectedMainCategory(item);
                                    handleMainCategorySelectBox(item);
                                    // 서브카테고리 초기화
                                    setSelectedSubCategory(undefined);
                                    setValue('subCategoryId', 0);
                                }}
                                items={mainCategoryData}
                                valueKey='id'
                                labelKey='name'
                                placeholder={'카테고리를 선택하세요.'}
                                selectWidth='100%'
                                selectedValue={selectedMainCategory}
                                setSelectedValue={setSelectedMainCategory}
                            />
                            {errors.mainCategoryId && (
                                <p className='text-red-500 text-sm pt-2 pl-4'>
                                    {errors.mainCategoryId.message}
                                </p>
                            )}
                        </div>
                    )}
                />
                <Controller
                    control={control}
                    name='subCategoryId'
                    render={({ field }) => (
                        <div>
                            <SelectBox
                                id='subCategoryId'
                                title={'서브카테고리'}
                                required
                                disabled={isLoading}
                                className='w-full'
                                items={subCategoryData}
                                valueKey='subCategoryId'
                                labelKey='subCategoryName'
                                placeholder={'서브 카테고리를 선택하세요.'}
                                selectWidth='100%'
                                selectedValue={selectedSubCategory}
                                setSelectedValue={setSelectedSubCategory}
                                onSelect={(item) => {
                                    field.onChange(item.subCategoryId);
                                }}
                            />
                            {errors.subCategoryId && (
                                <p className='text-red-500 text-sm pt-2 pl-4'>
                                    {errors.subCategoryId.message}
                                </p>
                            )}
                        </div>
                    )}
                />
            </div>

            <Controller
                control={control}
                name='title'
                render={({ field }) => (
                    <div>
                        <InputType.FormInput
                            id={'title'}
                            name={'title'}
                            title={'제목'}
                            required
                            maxLength={200}
                            type='text'
                            errorMessage={''}
                            defaultValue={field.value || ''}
                            onChange={(e) => {
                                field.onChange(e);
                            }}
                        />
                        {errors.title && (
                            <p className='text-red-500 text-sm pt-2 pl-4'>
                                {errors.title.message}
                            </p>
                        )}
                    </div>
                )}
            />

            <Controller
                control={control}
                name='contents'
                render={({ field }) => (
                    <div>
                        <InputType.TextAreaInputWithEditor
                            id={'contents'}
                            name={'contents'}
                            placeholder='질문 내용을 입력하세요.'
                            errorMessage={''}
                            maxHeight='600px'
                            className='h-[400px] md:h-[600px]'
                            defaultValue={field.value || ''}
                            onChange={(e) => {
                                field.onChange(e);
                            }}
                        />
                        {errors.contents && (
                            <p className='text-red-500 text-sm pt-2 pl-4'>
                                {errors.contents.message}
                            </p>
                        )}
                    </div>
                )}
            />

            <Button
                type='submit'
                size='lg'
                disabled={!isFormValid}
                className={`rounded-full bg-primary-100 h-auto px-20 py-4 text-white text-sm md:text-lg font-bold w-fit mx-auto mt-10 flex items-center gap-3`}
            >
                {isLoading ? (
                    <>
                        {mode === 'edit'
                            ? '질문 수정 중...'
                            : '질문 작성 중...'}
                        <svg
                            className='animate-spin h-5 w-5 text-white'
                            viewBox='0 0 24 24'
                            fill='none'
                        >
                            <circle
                                className='opacity-25'
                                cx='12'
                                cy='12'
                                r='10'
                                stroke='currentColor'
                                strokeWidth='4'
                            ></circle>
                            <path
                                className='opacity-75'
                                fill='currentColor'
                                d='M4 12a8 8 0 018-8v8z'
                            ></path>
                        </svg>
                    </>
                ) : mode === 'edit' ? (
                    '질문 수정하기'
                ) : (
                    '질문 작성하기'
                )}
            </Button>
        </form>
    );
}

export default PostWriteForm;
