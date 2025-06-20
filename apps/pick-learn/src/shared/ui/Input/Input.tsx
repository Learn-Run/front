'use client';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    ref?: React.Ref<HTMLInputElement>;
    isInvalid?: boolean;
}

const Input = ({
    className = '',
    ref,
    disabled,
    isInvalid = false,
    ...props
}: InputProps) => {
    const baseStyle = 'h-10 p-4 rounded-lg border transition-all input-class';
    const normalStyle = 'bg-white border-1 border-primary-100 text-slate-900';
    const disabledStyle =
        'bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed';
    const invalidStyle = 'border-red-500 focus:ring-1 focus:ring-red-500';

    const hasWidth = className?.match(/\bw-(\w|-)+\b/); // tailwind width 클래스 포함 여부 확인

    const computedClassName = `
    ${baseStyle}
    ${disabled ? disabledStyle : isInvalid ? invalidStyle : normalStyle}
    ${!hasWidth ? 'w-full' : ''}
    ${className}`;

    return (
        <input
            ref={ref}
            disabled={disabled}
            aria-invalid={isInvalid}
            className={computedClassName}
            onWheel={(e) => e.currentTarget.blur()}
            {...props}
        />
    );
};

export default Input;
