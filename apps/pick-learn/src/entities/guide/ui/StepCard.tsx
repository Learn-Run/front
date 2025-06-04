import { cn } from '@repo/ui/lib/utils';

export default function StepCard({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <li
            className={cn(
                'border border-gray-400 rounded-2xl list-none h-[364px] w-full max-w-[264px] p-8 grid grid-rows-2',
                className,
            )}
        >
            {children}
        </li>
    );
}
const Icon = ({ children }: { children: React.ReactNode }) => {
    return <div className='flex row-span-1'>{children}</div>;
};

const Contents = ({
    number,
    title,
    description,
}: {
    number: number;
    title: string;
    description: string;
}) => {
    const index = number.toString().padStart(2, '0');

    return (
        <div className='row-span-1 place-self-end'>
            <p className='flex font-medium text-lg'>/{index}</p>
            <h3 className='font-medium text-lg pb-2 md:text-2xl'>{title}</h3>
            <p className='text-gray-800 text-sm md:text-base'>{description}</p>
        </div>
    );
};

StepCard.Icon = Icon;
StepCard.Contents = Contents;
