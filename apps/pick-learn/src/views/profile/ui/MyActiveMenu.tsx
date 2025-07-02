import Link from 'next/link';

import { cn } from '@repo/ui/lib/utils';
import { routes } from '@/shared/model/constants/routes';
import { menuItems } from './constants';
import { getCountForType } from '@/entities/activeHistory/utils/countUtils';
import { getActiveHistoryCount } from '@/entities/activeHistory/api';
import { AccordionMenu, MenuItem } from '@/entities/activeHistory/ui';
import MobileActiveMenu from './MobileActiveMenu';

type MyActiveMenuProps = {
    paginationParams: {
        type?: string;
        page?: number;
        size?: number;
    };
    memberUuid: string;
    isMyProfile: boolean;
};

export default async function MyActiveMenu({
    paginationParams,
    memberUuid,
    isMyProfile,
}: MyActiveMenuProps) {
    const currentType = paginationParams.type || 'REVIEW_RECEIVED';
    const menuItemList = menuItems(memberUuid);

    const activeHistoryCount = await getActiveHistoryCount({
        memberUuid,
        period: 'TOTAL',
    });

    const countForType = (type: string) =>
        getCountForType(type, activeHistoryCount);

    return (
        <>
            <nav
                className={cn(
                    'bg-white shadow-md w-full max-w-[230px] h-full min-h-[388px] flex-col p-4 hidden md:block',
                )}
            >
                <h3 className='text-xl font-bold text-primary-100 mb-4'>
                    활동내역
                </h3>

                <div>
                    {menuItemList.map((item, index) => {
                        if (item.subItems) {
                            const isReviewActive = item.subItems.some(
                                (sub) => sub.type === currentType,
                            );

                            return (
                                <AccordionMenu
                                    key={item.type}
                                    title={item.title}
                                    type={item.type}
                                    subItems={item.subItems}
                                    currentType={currentType}
                                    isActive={isReviewActive}
                                    getCountForType={countForType}
                                />
                            );
                        }

                        return (
                            <MenuItem
                                key={index}
                                title={item.title}
                                href={item.href as string}
                                isActive={currentType === item.type}
                                count={countForType(item.type)}
                            />
                        );
                    })}
                    {isMyProfile && (
                        <Link
                            href={`${routes.profile}/${memberUuid}?type=BOOKMARK`}
                            className={cn(
                                'text-sm w-full border-b py-4 font-medium',
                                'flex items-center justify-between',
                                currentType === 'BOOKMARK'
                                    ? 'text-primary-100 font-bold'
                                    : 'text-gray-700',
                            )}
                            scroll={false}
                        >
                            <p>북마크 내역</p>
                        </Link>
                    )}
                </div>
            </nav>
            <MobileActiveMenu
                memberUuid={memberUuid}
                currentType={currentType}
            />
        </>
    );
}
