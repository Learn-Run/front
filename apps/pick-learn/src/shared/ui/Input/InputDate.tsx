import React from 'react';
type InputDateProps = {
    id: string;
    value: string | number | readonly string[] | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    name?: string;
    className?: string;
};
function InputDate(props: InputDateProps) {
    return (
        <div
            className={
                `bg-brand/5 border-[1px] border-brand h-[3rem] rounded-md flex gap-6 px-4 items-center justify-between cursor-pointer relative text-brand font-bold` +
                (props.className || '')
            }
        >
            <input
                id={props.id}
                type='datetime-local'
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                placeholder={props.placeholder}
                onKeyDown={(e) => e.preventDefault()}
                onBlur={props.onBlur}
            />
        </div>
    );
}

export default InputDate;
