import { cn } from '@repo/ui/lib/utils';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@repo/ui/components/base/Accordion';
import SubMenuItem from './SubMenuItem';

type SubItem = {
    title: string;
    href: string;
    type: string;
};

type AccordionMenuProps = {
    title: string;
    type: string;
    subItems: SubItem[];
    currentType: string;
    isActive: boolean;
    getCountForType: (type: string) => number;
};

export default function AccordionMenu({
    title,
    type,
    subItems,
    currentType,
    isActive,
    getCountForType,
}: AccordionMenuProps) {
    return (
        <Accordion
            type='single'
            collapsible
            className='w-full border-b'
            defaultValue={isActive ? type : undefined}
        >
            <AccordionItem value={type}>
                <AccordionTrigger
                    className={cn(
                        'py-4 font-medium text-sm hover:no-underline cursor-pointer',
                        isActive && 'text-primary-100 font-bold',
                    )}
                >
                    <span>{title}</span>
                </AccordionTrigger>
                <AccordionContent>
                    <ul className='pl-4'>
                        {subItems.map((subItem, subIndex) => (
                            <SubMenuItem
                                key={subIndex}
                                title={subItem.title}
                                href={subItem.href}
                                isActive={currentType === subItem.type}
                                count={getCountForType(subItem.type)}
                            />
                        ))}
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
