'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { getMainCategories, getCategoryList } from '@/entities/category/api';
import {
    CategoryListType,
    MainCategoryType,
} from '@/entities/category/api/types';
import { SelectBox } from '@/shared/ui/SelectBox';
import { InputType } from '@/shared/ui/wrapper/InputWrap';
import { Button } from '@repo/ui/components/base/Button';
import { postWriteSchema, PostWriteSchemaType } from '../model/schema';
import { createPost } from '../api';
import { useAlert } from '../model/hooks/useAlert';

export interface PostFormDataType {
    mainCategoryId: number;
    subCategoryId: number;
    title: string;
    contents: string;
}

function PostWriteForm() {
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
    });

    const alert = useAlert();

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

    useEffect(() => {
        const fetchMainCategoryData = async () => {
            const response = await getMainCategories();
            setMainCategoryData(response);
        };
        fetchMainCategoryData();
    }, []);

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
            await createPost(data);
            setIsLoading(false);
        } catch (error) {
            console.log('🚀 ~ onSubmit ~ error:', error);
            setIsLoading(false);
            alert.error('질문 작성에 실패했습니다.');
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-5 pt-10 pb-40'
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
                                    handleMainCategorySelectBox(item);
                                }}
                                items={mainCategoryData}
                                valueKey='id'
                                labelKey='name'
                                placeholder={'카테고리를 선택하세요.'}
                                selectWidth='100%'
                                {...field}
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
                                {...field}
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
                            title={'제목'}
                            required
                            maxLength={200}
                            type='text'
                            errorMessage={''}
                            {...field}
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
                            placeholder='질문 내용을 입력하세요.'
                            errorMessage={''}
                            maxHeight='600px'
                            className='h-[400px] md:h-[600px]'
                            {...field}
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
                        질문 작성 중...
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
                ) : (
                    '질문 작성하기'
                )}
            </Button>
        </form>
    );
}

export default PostWriteForm;
