import React from 'react';

export default function AskItemCardList() {
    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 container mx-auto px-4 md:px-0 items-center justify-center md:max-w-[80%] xl:max-w-[1262px]'>
            <li className='flex items-center justify-center bg-red-300 rounded-2xl h-50 w-full'>
                test
            </li>
            <li className='flex items-center justify-center bg-red-300 rounded-2xl h-50 w-full'>
                test
            </li>
            <li className='flex items-center justify-center bg-red-300 rounded-2xl h-50 w-full'>
                test
            </li>
            <li className='flex items-center justify-center bg-red-300 rounded-2xl h-50 w-full'>
                test
            </li>
        </ul>
    );
}
