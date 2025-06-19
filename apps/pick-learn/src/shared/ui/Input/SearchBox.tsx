'use client';

import { useState } from 'react';

import Input from './Input';
import { Search } from 'lucide-react';

interface SearchBoxProps {
    initialValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    onSearch?: (keyword: string) => void;
    placeholder?: string;
    className?: string;
}

const SearchBox = ({
    initialValue = '',
    value,
    onChange,
    onSearch,
    placeholder = '검색어를 입력하세요',
    className = '',
}: SearchBoxProps) => {
    const [internalValue, setInternalValue] = useState(initialValue);
    const keyword = value ?? internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        onChange?.(val);
        if (value === undefined) setInternalValue(val);
    };

    const handleSearch = () => {
        onSearch?.(keyword?.trim());
    };

    return (
        <div className={`relative w-[17rem] h-[3rem] ${className}`}>
            <Input
                type='text'
                value={keyword}
                onChange={handleChange}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder={placeholder}
                className='pr-10 h-full mb-0 border-brand bg-[#EFEFEF] leading-9 px-3 placeholder:text-brand placeholder:font-bold focus:outline-none'
            />

            <div
                onClick={handleSearch}
                className='absolute -translate-y-1/2 cursor-pointer top-1/2 right-3'
            >
                <Search size={20} className='text-brand' />
            </div>
        </div>
    );
};

export default SearchBox;
