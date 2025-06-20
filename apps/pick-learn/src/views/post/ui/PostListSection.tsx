import {
    CategoryListType,
    MainCategoryType,
} from '@/entities/category/api/types';
import CategoryListItem from '@/entities/category/ui/CategoryListItem';
import CategoryMobileList from '@/entities/category/ui/CategoryMobileList';
import { PostListType } from '@/entities/post/api/types';
import AskItemCardList from '@/views/home/ui/AskItemCardList';

export interface postListSectionProps {
    searchParams: {
        mainCategoryId: number;
        subCategoryId: number;
        categoryListId: number;
        sort?: string;
    };
    categoryList: CategoryListType[][];
    mainCategories: MainCategoryType[];
    postList: PostListType;
}

export default async function PostListSection({
    searchParams,
    categoryList,
    mainCategories,
    postList,
}: postListSectionProps) {
    return (
        <section className='flex flex-col md:flex-row md:justify-between md:items-start container mx-auto m-5 gap-5 px-4 md:px-0 2xl:px-0 max-w-[1240px]'>
            <CategoryListItem
                searchParams={searchParams}
                categoryList={categoryList}
                mainCategories={mainCategories}
            />
            <CategoryMobileList
                searchParams={searchParams}
                categoryList={categoryList}
                mainCategories={mainCategories}
            />

            <AskItemCardList
                className='grid grid-cols-1 xl:grid-cols-3 sm:gird-cols-1'
                postList={postList}
            />
        </section>
    );
}
