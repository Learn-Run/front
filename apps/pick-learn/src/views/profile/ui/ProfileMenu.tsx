import Link from 'next/link';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@repo/ui/components/base/Accordion';
import { cn } from '@repo/ui/lib/utils';

export default function ProfileMenu() {
    return (
        <nav
            className={cn(
                'bg-white shadow-md w-full max-w-[330px] h-full min-h-[388px] flex-col p-4 hidden md:flex',
            )}
        >
            <h3 className='text-xl font-bold  text-primary-100 mb-4'>
                활동내역
            </h3>
            <Link
                //merge후에 수정가능
                href={`/post`}
                replace
                scroll={false}
                className='text-sm w-full border-b py-4 hover:underline font-medium'
            >
                전체
            </Link>
            <Accordion type='single' collapsible defaultValue='1'>
                <AccordionItem value='1'>
                    <AccordionTrigger className='cursor-pointer'>
                        질문 내역
                    </AccordionTrigger>
                    <AccordionContent>
                        <p>질문 내역</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='2'>
                    <AccordionTrigger className='cursor-pointer'>
                        답변 내역
                    </AccordionTrigger>
                    <AccordionContent>
                        <p>답변 내역</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='3'>
                    <AccordionTrigger className='cursor-pointer'>
                        리뷰 내역
                    </AccordionTrigger>
                    <AccordionContent>
                        <p>리뷰 내역</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </nav>
    );
}
