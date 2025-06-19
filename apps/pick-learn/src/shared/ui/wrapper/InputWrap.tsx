'use client';

import React, { useRef, useState } from 'react';

import { ImageIcon } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { cn } from '@repo/ui/lib/utils';
import Tiptap from '../Input/Tiptap';

// ✅ 공통 Props (제네릭으로 element 타입 분리)
interface BaseProps<T extends HTMLElement> {
    id: string;
    name: string;
    title: string;
    defaultValue?: string;
    value?: string;
    required?: boolean;
    readonly?: boolean;
    onChange?: (e: React.ChangeEvent<T>) => void;
    className?: string;
    errorMessage?: string;
    maxLength?: number;
    maxHeight?: string; // Tiptap 전용
    disabled?: boolean;
    placeholder?: string;
    language?: string; // DatePicker 전용
}

// ✅ Input 전용 Props
interface InputProps extends BaseProps<HTMLInputElement> {
    type: string;
}

// ✅ Label + ErrorMessage Wrapper
const BaseInputWrapper = ({
    id,
    title,
    required,
    value,
    errorMessage,
    children,
}: {
    id: string;
    title?: string;
    required?: boolean;
    value: string;
    errorMessage?: string;

    children: React.ReactNode;
}) => (
    <div className='relative w-full'>
        {children}
        <label
            htmlFor={id}
            className={cn(
                'absolute left-[1.2rem] top-[1.1rem] text-[1.1rem] font-medium ease-in-out duration-150',
                errorMessage ? 'text-red-500' : 'text-faikerz-green',
                value &&
                    'top-[-1.11rem] text-sm bg-white px-2 py-[0.2rem] rounded-md left-[1rem]',
                'peer-focus:top-[-1.11rem] peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-focus:py-[0.2rem] peer-focus:rounded-md peer-focus:left-[1rem]',
            )}
        >
            {title}
            {required && <span className='text-custom-green-200 px-1'>*</span>}
        </label>
        {errorMessage && (
            <p className='text-xs mt-2 text-red-500 pl-4'>{errorMessage}</p>
        )}
    </div>
);

// ✅ <input> 전용 컴포넌트
function FormInput({
    id,
    name,
    title,
    type,
    required = false,
    readonly = false,
    defaultValue = '',
    disabled = false,
    placeholder = '',
    onChange,
    errorMessage = '',
    maxLength = 100,
    className,
}: InputProps) {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange?.(e);
    };

    return (
        <BaseInputWrapper
            id={id}
            title={title}
            required={required}
            value={value}
            errorMessage={errorMessage}
        >
            <input
                type={type}
                id={id}
                name={name}
                disabled={disabled}
                placeholder={placeholder}
                readOnly={readonly}
                onChange={handleChange}
                required={required}
                maxLength={maxLength}
                value={value}
                className={cn(
                    'peer w-full border-[1px] border-faikerz-green/50 outline-none text-[1.1rem] pt-5 pb-3 px-4 font-semibold rounded-md',
                    'bg-faikerz-black/5 text-faikerz-black placeholder:text-faikerz-green/70',
                    'focus:ring-2 focus:ring-faikerz-green/20 focus:border-faikerz-green focus:bg-faikerz-white focus:text-faikerz-black',
                    value && !errorMessage && 'bg-faikerz-green/10 ',
                    errorMessage && 'bg-red-50 border-red-500 text-red-400',
                    className,
                )}
                style={{ cursor: 'auto !important' }}
            />
        </BaseInputWrapper>
    );
}

// ✅ <textarea> 전용 컴포넌트
function TextAreaInputWithEditor({
    id,
    name,
    title,
    required = false,
    disabled = false,
    placeholder = '',
    defaultValue = '',
    onChange,
    errorMessage = '',
    maxHeight = '200px',
    className,
}: BaseProps<HTMLTextAreaElement>) {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
        onChange?.(e);
    };

    return (
        <BaseInputWrapper
            id={id}
            title={title}
            required={required}
            value={value}
            errorMessage={errorMessage}
        >
            <Tiptap
                name={name}
                value={value}
                placeholder={placeholder}
                maxHeight={maxHeight}
                onChange={handleChange}
                className={cn(
                    'peer w-full border-[1px] border-faikerz-green outline-none text-[1.1rem] pt-5 pb-3 px-4 font-semibold rounded-md',
                    'bg-faikerz-black/5 text-faikerz-black placeholder:text-faikerz-green/70',
                    'focus:ring-2 focus:ring-faikerz-green/20 focus:border-faikerz-green focus:bg-faikerz-white focus:text-faikerz-black',
                    value && !errorMessage && 'bg-faikerz-green/10 ',
                    errorMessage && 'bg-red-50 border-red-500 text-red-400',
                    disabled && 'cursor-not-allowed bg-faikerz-black/30',
                    className,
                )}
            />
        </BaseInputWrapper>
    );
}

// ✅ <select> 전용 컴포넌트
function SelectInput({
    id,
    name,
    title,
    required = false,
    disabled = false,
    defaultValue = '',
    onChange,
    errorMessage = '',
    options = [],
    className,
}: BaseProps<HTMLSelectElement> & {
    options: { value: string; label: string }[];
}) {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        onChange?.(e);
    };

    return (
        <BaseInputWrapper
            id={id}
            title={title}
            required={required}
            value={value}
            errorMessage={errorMessage}
        >
            <select
                id={id}
                name={name}
                disabled={disabled}
                onChange={handleChange}
                required={required}
                value={value}
                className={cn(
                    'appearance-none peer w-full border-[1px] border-faikerz-green/50 outline-none text-[1.1rem] pt-5 pb-3 px-4 font-semibold rounded-md',
                    'bg-faikerz-white text-faikerz-black placeholder:text-faikerz-green/70',
                    'focus:ring-2 focus:ring-faikerz-green/20 focus:border-faikerz-green',
                    value && !errorMessage && 'bg-faikerz-green/10 ',
                    errorMessage && 'bg-red-50 border-red-500 text-red-400',
                    disabled && 'cursor-not-allowed bg-faikerz-black/30',
                    className,
                )}
            >
                <option value='' disabled hidden></option>
                {options.map((opt) => (
                    <option
                        key={opt.value}
                        value={opt.value}
                        className='text-base text-faikerz-black bg-white hover:bg-faikerz-green/10'
                    >
                        {opt.label}
                    </option>
                ))}
            </select>

            {/* 커스텀 드롭다운 화살표 */}
            <div className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2'>
                <svg
                    className='w-4 h-4 text-faikerz-green'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19 9l-7 7-7-7'
                    />
                </svg>
            </div>
        </BaseInputWrapper>
    );
}

// ✅ <InputDate> 전용 컴포넌트
function DateInput({
    id,
    name,
    title,
    language,
    // required = false,
    disabled = false,
    value = '',
    // placeholder = '',
    // defaultValue = '',
    onChange,
    errorMessage = '',
}: BaseProps<HTMLInputElement>) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };
    return (
        <BaseInputWrapper id={id} title={title} value={value}>
            <DatePicker
                id={id}
                name={name}
                selected={value ? new Date(value) : null} // 이것만 있으면 충분
                onChange={(date: Date | null) =>
                    handleChange({
                        target: {
                            value: date ? date.toISOString() : '',
                            name: name,
                        },
                    } as React.ChangeEvent<HTMLInputElement>)
                }
                onKeyDown={(e) => e.preventDefault()} // 키보드 입력 방지
                dateFormat={
                    language === '한국어'
                        ? 'yyyy년 MM월 dd일'
                        : language === 'ENG'
                          ? 'MM/dd/yyyy'
                          : 'yyyy年MM月dd日'
                }
                locale={ko}
                className={cn(
                    'appearance-none peer w-full border-[1px] border-faikerz-green/50 outline-none text-[1.1rem] pt-5 pb-3 px-4 font-semibold rounded-md',
                    'bg-faikerz-white text-faikerz-black placeholder:text-faikerz-green/70',
                    'focus:ring-2 focus:ring-faikerz-green/20 focus:border-faikerz-green',
                    value && !errorMessage && 'bg-faikerz-green/10 ',
                    errorMessage && 'bg-red-50 border-red-500 text-red-400',
                    disabled && 'cursor-not-allowed bg-faikerz-black/30',
                )}
            />
        </BaseInputWrapper>
    );
}

function ImageInput({
    id,
    name,
    required = false,
    disabled = false,
    placeholder = '',
    onChange,
    errorMessage = '',
}: BaseProps<HTMLInputElement>) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   console.log('ImageInputInfo handleChange', e.target.files);
    //   setValue(e.target.value);
    //   onChange?.(e);
    // };

    return (
        <BaseInputWrapper id={id} value={''} errorMessage={errorMessage}>
            <label
                htmlFor={id}
                className='w-full h-40 bg-[#EEEEEE] flex flex-col gap-2 justify-center items-center border-[0.05rem] border-faikerz-green rounded-lg
          hover:bg-brand-light hover:text-black cursor-pointer'
            >
                <ImageIcon className='text-faikerz-green size-[2rem]' />
                <p className='text-md text-faikerz-green font-semibold'>
                    {placeholder}
                </p>
            </label>
            <input
                type='file'
                accept='image/*'
                id={id}
                name={name}
                ref={inputRef}
                disabled={disabled}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                className='hidden'
                // className={cn(
                //   'peer w-full border-[1px] border-faikerz-green/50 outline-none text-[1.1rem] pt-5 pb-3 px-4 font-semibold rounded-md',
                //   'bg-faikerz-black/5 text-faikerz-black placeholder:text-faikerz-green/70',
                //   'focus:ring-2 focus:ring-faikerz-green/20 focus:border-faikerz-green focus:bg-faikerz-white focus:text-faikerz-black',
                //   value && !errorMessage && 'bg-faikerz-green/10 ',
                //   errorMessage && 'bg-red-50 border-red-500 text-red-400',
                //   disabled && 'cursor-not-allowed bg-faikerz-black/30'
                // )}
                style={{ cursor: 'auto !important' }}
            />
        </BaseInputWrapper>
    );
}

// ✅ <textarea> 전용 컴포넌트
function TextAreaInput({
    id,
    name,
    title,
    required = false,
    readonly = false,
    disabled = false,
    placeholder = '',
    defaultValue = '',
    onChange,
    errorMessage = '',
    maxLength = 1000,
    className,
}: BaseProps<HTMLTextAreaElement>) {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
        onChange?.(e);
    };

    return (
        <BaseInputWrapper
            id={id}
            title={title}
            required={required}
            value={value}
            errorMessage={errorMessage}
        >
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                readOnly={readonly}
                onChange={handleChange}
                disabled={disabled}
                required={required}
                maxLength={maxLength}
                value={value}
                className={cn(
                    'peer w-full border-[1px] border-faikerz-green/50 outline-none text-[1.1rem] pt-5 pb-3 px-4 font-semibold rounded-md',
                    'bg-faikerz-black/5 text-faikerz-black placeholder:text-faikerz-green/70',
                    'focus:ring-2 focus:ring-faikerz-green/20 focus:border-faikerz-green focus:bg-faikerz-white focus:text-faikerz-black',
                    value && !errorMessage && 'bg-faikerz-green/10 ',
                    errorMessage && 'bg-red-50 border-red-500 text-red-400',
                    disabled && 'cursor-not-allowed bg-faikerz-black/30',
                    className,
                )}
                style={{ cursor: 'auto !important' }}
            />
        </BaseInputWrapper>
    );
}

// ✅ export
export const InputType = {
    FormInput,
    TextAreaInput,
    TextAreaInputWithEditor,
    SelectInput,
    DateInput,
    ImageInput,
};
