import {
    CategoryListType,
    MainCategoryType,
} from '@/entities/category/api/types';
import PopularCategoryListItem from '@/entities/category/ui/PopularCategoryListItem';
import PopularCategoryMobileList from '@/entities/category/ui/PopularCategoryMobileList';
import { AskListType } from '@/entities/post/api/types';
import { BookMarkType } from '@/features/BookMark/api/types';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import AskItemCardList from '@/views/home/ui/AskItemCardList';
import { cn } from '@repo/ui/lib/utils';

export interface popularPostListSectionProps {
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

export default async function PopularPostListSection({
    searchParams,
    categoryList,
    mainCategories,
    postList,
    bookMarkStatus,
    className,
}: popularPostListSectionProps) {
    return (
        <SectionWrapper
            className={cn('flex flex-col md:flex-row gap-10', className)}
        >
            <PopularCategoryListItem
                searchParams={searchParams}
                categoryList={categoryList}
                mainCategories={mainCategories}
            />
            <PopularCategoryMobileList
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
