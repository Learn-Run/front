import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@repo/ui/lib/utils';
import { routes } from '@/shared/model/constants/routes';
import { getReviewList } from '@/entities/review/api';
import { MyActivePostListType } from '../api/types';
import Profile from '@/entities/member/ui/Profile';
import StarFilled from '@/shared/assets/icons/StarFilled';
import ShowMoreText from '@/shared/ui/ShowMoreText';

export default async function MyReviewList({
    myActiveHistoryList,
}: {
    myActiveHistoryList: MyActivePostListType;
}) {
    const MyReviewList = await Promise.all(
        myActiveHistoryList.posts.map(
            async (item) => await getReviewList(item.uuid),
        ),
    );

    return (
        <ul
            className={cn(
                'grid grid-cols-1  gap-2 container mx-auto md:px-0 items-center justify-center md:max-w-[80%] xl:max-w-[1262px] mb-10',
            )}
        >
            {MyReviewList.map((item) => (
                <li
                    key={item.reviewId}
                    className='flex flex-col items-start justify-between border gap-4 border-gray-400 rounded-2xl  w-full px-5 py-6 bg-white '
                >
                    <div className='flex justify-between w-full'>
                        <Link href={`${routes.post}/${item.post.postUuid}`}>
                            <h3 className='text-lg font-medium'>
                                {item.post.postTitle}
                            </h3>
                        </Link>
                    </div>
                    <div className='flex justify-between w-full'></div>
                    <ShowMoreText text={item.contents} />
                    <ul className='flex gap-x-4'>
                        {item.imageList.map((image) => (
                            <li key={image.imageUrl}>
                                <Image
                                    src={image.imageUrl}
                                    alt='postImage'
                                    width={100}
                                    height={100}
                                    className='w-full h-full object-cover'
                                />
                            </li>
                        ))}
                    </ul>
                    <hr className='w-full border-gray-400' />
                    <div className='flex justify-between w-full whitespace-nowrap'>
                        <Profile memberUuid={item.reviewerUuid} />
                        <p className='flex items-center gap-x-1 text-sm text-gray-700'>
                            <StarFilled /> {item.rating} 점
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
