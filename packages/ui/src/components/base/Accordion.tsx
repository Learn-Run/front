'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '../../lib/utils';
import Minus from '../../assets/icons/Minus';
import Plus from '../../assets/icons/Plus';

function Accordion({
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot='accordion-item'
            className={cn(
                'border border-gray-400 rounded-lg px-5',
                'data-[state=open]:bg-gray-100',
                className,
            )}
            {...props}
        />
    );
}

function AccordionTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className='flex'>
            <AccordionPrimitive.Trigger
                data-slot='accordion-trigger'
                className={cn(
                    'flex flex-1 items-start justify-between gap-4 rounded-md py-4',
                    'text-left text-xl font-medium transition-all outline-none disabled:pointer-events-none',
                    'group',
                    className,
                )}
                {...props}
            >
                {children}
                <Plus
                    data-slot='plus'
                    className='group-data-[state=open]:hidden'
                />
                <Minus
                    data-slot='minus'
                    className=' group-data-[state=closed]:hidden'
                />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot='accordion-content'
            className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-gray-800'
            {...props}
        >
            <div className={cn('pt-0 pb-4', className)}>{children}</div>
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
