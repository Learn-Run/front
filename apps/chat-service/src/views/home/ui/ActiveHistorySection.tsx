import ActiveHistoryTop from './ActiveHistoryTop';
import { getActiveHistoryCount } from '@/entities/activeHistory/api';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getCountForType } from '@/entities/activeHistory/utils/countUtils';
import { activeMenuItems } from './constants';

export default async function ActiveHistorySection() {
    const session = await getServerSession(options);
    const memberUuid = session?.user?.memberUuid;

    if (!memberUuid) {
        return null;
    }

    const activeHistoryCount = await getActiveHistoryCount({
        memberUuid,
        period: 'TOTAL',
    });

    const countForType = (type: string) =>
        getCountForType(type, activeHistoryCount);

    const menuItems = activeMenuItems();

    return (
        <div className='border border-gray-300 rounded-xl bg-white p-5 lg:col-span-1 w-full'>
            <ActiveHistoryTop totalCount={activeHistoryCount.totalCount} />
            <ul>
                {menuItems.map((item) => (
                    <li key={item.title} className='flex justify-between py-1'>
                        <span className='text-sm font-medium'>
                            {item.title}
                        </span>
                        <span className='font-semibold text-primary-100'>
                            {countForType(item.title)} 개
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
