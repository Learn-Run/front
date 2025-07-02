type MenuItemProps = {
    title: string;
    count: number;
};

export default function ActiveHistoryListItem({ title, count }: MenuItemProps) {
    return (
        <>
            <span>{title}</span>
            <span className='text-xs font-medium text-gray-500'>{count}</span>
        </>
    );
}
