'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import Input from './Input';
import { useAlert } from '@/hooks/useAlert';
import FlexBox from '../wrapper/FlexBox';
import { Button } from '@repo/ui/components/base/Button';

interface InputTagProps {
    limit?: number;
    id?: string;
    minLength?: number;
    maxLength?: number;
    label?: string;
    placeholder?: string;
    buttonText?: string;
    value?: string[];
    setValue?: (items: string[]) => void;
    setDeleteValue?: (item: string) => void;
}

function InputTag({
    limit,
    minLength = 2,
    maxLength = 10,
    label = '태그',
    placeholder = '태그를 입력하세요',
    buttonText = '추가',
    id,
    value,
    setValue,
    setDeleteValue,
}: InputTagProps) {
    const [internalTag, setInternalTag] = useState<string[]>([]);
    const [tagValue, setTagValue] = useState('');
    const [isComposing, setIsComposing] = useState(false);

    const alert = useAlert();

    const tags = value ?? internalTag;
    const setTags = setValue ?? setInternalTag;

    const handleAddTag = (value: string) => {
        const trimmed = value.trim();

        if (!trimmed) return;

        if (limit && tags.length >= limit) {
            alert.error(`${label}는 ${limit}개까지 가능합니다.`);
            setTagValue('');
            return;
        }

        if (trimmed.length < minLength || trimmed.length > maxLength) {
            alert.error(
                `${minLength}자에서 ${maxLength}자 사이의 ${label}를 입력해주세요.`,
            );
            return;
        }

        if (tags.includes(trimmed)) {
            alert.error(`이미 등록된 ${label}입니다.`);
            return;
        }

        setTags([...tags, trimmed]);
        setTagValue('');
    };

    const handleRemoveTag = (index: number, item: string) => {
        const updatedTags = [...tags];
        updatedTags.splice(index, 1);
        setTags(updatedTags);
        setDeleteValue?.(item);
    };

    return (
        <FlexBox className='flex-col flex-wrap gap-1'>
            <FlexBox className='items-center gap-1'>
                <Input
                    id={id}
                    type='text'
                    minLength={minLength}
                    maxLength={maxLength}
                    value={tagValue}
                    onChange={(e) => setTagValue(e.target.value)}
                    onCompositionStart={() => setIsComposing(true)}
                    onCompositionEnd={() => setIsComposing(false)}
                    placeholder={placeholder}
                    className='text-black font-medium w-full h-[50px] border-1 border-faikerz-green rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-faikerz-green focus:border-transparent'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            e.stopPropagation();
                            if (!isComposing) {
                                handleAddTag(tagValue);
                            }
                        }
                    }}
                />
                <Button
                    className='h-[50px] w-fit bg-faikerz-green text-faikerz-white rounded-md'
                    onClick={() => {
                        if (!isComposing) {
                            handleAddTag(tagValue);
                        }
                    }}
                >
                    {buttonText}
                </Button>
            </FlexBox>

            <FlexBox className='flex-wrap gap-2 mb-2'>
                {tags.map((item, idx) => (
                    <p
                        key={idx}
                        className='flex gap-1 justify-between border text-center pl-2 pr-1 leading-7 min-w-[4rem] max-w-[200px] items-center rounded-md border-faikerz-green text-[0.75rem] font-medium break-words text-faikerz-green'
                    >
                        <span className='truncate text-faikerz-green'>
                            {item}
                        </span>
                        <span
                            className='flex-shrink-0 cursor-pointer'
                            onClick={() => handleRemoveTag(idx, item)}
                        >
                            <X
                                size={18}
                                className='ml-2 text-gray-400 hover:text-faikerz-green'
                            />
                        </span>
                    </p>
                ))}
            </FlexBox>
        </FlexBox>
    );
}

export default InputTag;
