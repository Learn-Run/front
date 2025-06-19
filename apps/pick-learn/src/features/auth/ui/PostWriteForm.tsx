'use client';
import {
    getMainCategories,
    getSubCategoryByMainCategoryId,
} from '@/entities/category/api';
import {
    CategoryListType,
    MainCategoryType,
} from '@/entities/category/api/types';
import { SelectBox } from '@/shared/ui/SelectBox';
import { InputType } from '@/shared/ui/wrapper/InputWrap';
import { Button } from '@repo/ui/components/base/Button';
import React, { useEffect, useState } from 'react';

export interface PostFormDataType {
    mainCategoryId: number;
    subCategoryId: number;
    title: string;
    contents: string;
}

function PostWriteForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [postFormData, setPostFormData] = useState<PostFormDataType>({
        mainCategoryId: 0,
        subCategoryId: 0,
        title: '',
        contents: '',
    });

    const [mainCategoryData, setMainCategoryData] = useState<
        MainCategoryType[]
    >([]);
    const [subCategoryData, setSubCategoryData] = useState<CategoryListType[]>([
        {
            id: 1,
            mainCategoryId: 0,
            mainCategoryName: '',
            subCategoryId: 0,
            subCategoryName: '메인카테고리를 선택하세요',
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

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        console.log(e.target);
        const { name, value } = e.target;
        console.log(name, value);
        setPostFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleMainCategorySelectBox = (item: MainCategoryType) => {
        setPostFormData((prevData) => ({
            ...prevData,
            mainCategoryId: item.id,
        }));
        const fetchSubCategoryData = async () => {
            const response = await getSubCategoryByMainCategoryId(item.id);
            setSubCategoryData(response);
        };
        fetchSubCategoryData();
    };

    const handleSubCategorySelectBox = (item: CategoryListType) => {
        setPostFormData((prevData) => ({
            ...prevData,
            subCategoryId: item.subCategoryId,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(postFormData);
        setIsLoading(false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-5 pt-10 pb-40'
        >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div>
                    <SelectBox
                        id='mainCategoryId'
                        title={'카테고리'}
                        required
                        disabled={isLoading}
                        className='w-full'
                        name={'카테고리'}
                        onSelect={handleMainCategorySelectBox}
                        items={mainCategoryData}
                        valueKey='id'
                        labelKey='name'
                        placeholder={'카테고리를 선택하세요.'}
                        defaultValue={mainCategoryData[0]}
                        selectWidth='100%'
                    />
                    {/* {errorMessages.language && (
                        <p className='text-red-500 text-sm pt-2 pl-4'>
                            {errorMessages.language}
                        </p>
                    )} */}
                </div>
                <div>
                    <SelectBox
                        id='subCategoryId'
                        title={'서브카테고리'}
                        required
                        disabled={isLoading}
                        className='w-full'
                        name={'서브카테고리'}
                        onSelect={handleSubCategorySelectBox}
                        items={subCategoryData}
                        valueKey='subCategoryId'
                        labelKey='subCategoryName'
                        placeholder={'서브 카테고리를 선택하세요.'}
                        defaultValue={subCategoryData[0]}
                        selectWidth='100%'
                    />
                    {/* {errorMessages.categoryName && (
                        <p className='text-red-500 text-sm pt-2 pl-4'>
                            {errorMessages.categoryName}
                        </p>
                    )} */}
                </div>
                {/* <div>
                    <InputType.DateInput
                        id={blogFormData[2].name}
                        name={blogFormData[2].name}
                        title={blogFormData[2].text}
                        required
                        onChange={handleInputChange}
                        value={blogData.customCreatedAt}
                        errorMessage={''}
                        maxLength={50}
                        language={lanType}
                    />
                    {errorMessages.customCreatedAt && (
                        <p className='text-red-500 text-sm pt-2 pl-4'>
                            {errorMessages.customCreatedAt}
                        </p>
                    )}
                </div> */}
            </div>
            <div>
                <InputType.FormInput
                    id={'title'}
                    name={'title'}
                    title={'제목'}
                    required
                    onChange={handleInputChange}
                    defaultValue={postFormData.title}
                    type='text'
                    errorMessage={''}
                    maxLength={200}
                />
                {/* {errorMessages.title && (
                    <p className='text-red-500 text-sm pt-2 pl-4'>
                        {errorMessages.title}
                    </p>
                )} */}
            </div>
            {/* {blogThumbnailImg ? (
                <div
                    onClick={handleDeleteImag}
                    className='text-gray-500 w-full h-auto bg-white flex flex-col gap-2 justify-center items-center border-[0.05rem] border-faikerz-green rounded-lg
      hover:bg-brand-light hover:text-black cursor-pointer overflow-hidden md:min-h-[300px] relative'
                >
                    <Image
                        src={blogThumbnailImg}
                        alt='Blog Thumbnail'
                        width={800}
                        height={800}
                        className='object-cover w-full h-full min-h-[200px]'
                        // style={{ objectFit: 'cover' }}
                    />
                </div>
            ) : (
                <div>
                    <InputType.ImageInput
                        id={'thumbnail'}
                        name={'thumbnail'}
                        title={'썸네일 이미지'}
                        required
                        defaultValue={blogThumbnailImg}
                        onChange={handleBlogThumbnailImg}
                        placeholder={
                            '블로그 썸네일 이미지를 선택하세요.'
                        }
                        errorMessage={''}
                        maxLength={20}
                    />
                    {errorMessages.blogThumbnailImg && (
                        <p className='text-red-500 text-sm pt-2 pl-4'>
                            {errorMessages.blogThumbnailImg}
                        </p>
                    )}
                </div>
            )} */}

            <InputType.TextAreaInputWithEditor
                id={'contents'}
                name={'contents'}
                title={'내용'}
                placeholder='질문 내용을 입력하세요.'
                required
                onChange={handleInputChange}
                defaultValue={postFormData.contents}
                errorMessage={''}
                maxHeight='600px'
                className='h-[400px] md:h-[600px]'
            />
            {/* {errorMessages.contentHtml && (
                <p className='text-red-500 text-sm pt-2 pl-4'>
                    {errorMessages.contentHtml}
                </p>
            )} */}
            {/* <InputTag
                id={blogFormData[6].name}
                value={blogData.tags}
                buttonText={
                    lanType === '한국어'
                        ? '태그 추가'
                        : lanType === '日本語'
                          ? 'タグを追加'
                          : 'Add Tag'
                }
                setValue={(tags: string[]) =>
                    setBlogData((prevData) => ({ ...prevData, tags }))
                }
                setDeleteValue={(tag: string) =>
                    setBlogData((prevData) => ({
                        ...prevData,
                        tags: prevData.tags.filter((t) => t !== tag),
                    }))
                }
                placeholder='Enter tags (e.g., tag1, tag2, tag3)'
            />
            {errorMessages.tags && (
                <p className='text-red-500 text-sm pt-2 pl-4'>
                    {errorMessages.tags}
                </p>
            )} */}
            <Button
                type='submit'
                size='lg'
                // disabled={!isValid || isLoading}
                className={`rounded-full bg-faikerz-green h-auto px-20 py-4 text-faikerz-white text-sm md:text-lg font-bold w-fit mx-auto mt-10 flex items-center gap-3`}
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
