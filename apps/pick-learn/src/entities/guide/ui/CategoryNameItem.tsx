import React from 'react';

export default function CategoryNameItem({
    text = 'category',
}: {
    text: string;
}) {
    return (
        <li className='text-[0.7rem] lg:text-[0.825rem] px-5 py-2.5 bg-white rounded-[5px] border-1 border-black/10 cursor-pointer hover:bg-primary-100 hover:text-white transition-colors duration-200 ease-in-out'>
            {text}
        </li>
    );
}
