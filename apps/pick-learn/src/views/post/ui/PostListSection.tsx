import {
    CategoryListType,
    MainCategoryType,
} from '@/entities/category/api/types';
import CategoryListItem from '@/entities/category/ui/CategoryListItem';
import CategoryMobileList from '@/entities/category/ui/CategoryMobileList';
import { AskListType } from '@/entities/post/api/types';
import { BookMarkType } from '@/features/BookMark/api/types';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import AskItemCardList from '@/views/home/ui/AskItemCardList';
import { cn } from '@repo/ui/lib/utils';

export interface postListSectionProps {
    searchParams: {
        mainCategoryId: number;
        subCategoryId: number;
        sort?: string;
    };
    categoryList: CategoryListType[][];
    mainCategories: MainCategoryType[];
    postList: AskListType;
    bookMarkStatus: BookMarkType[];
    className?: string;
}

export default async function PostListSection({
    searchParams,
    categoryList,
    mainCategories,
    postList,
    bookMarkStatus,
    className,
}: postListSectionProps) {
    return (
        <SectionWrapper
            className={cn('flex flex-col md:flex-row gap-10', className)}
        >
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
                bookMarkStatus={bookMarkStatus}
            />
        </SectionWrapper>
    );
}
