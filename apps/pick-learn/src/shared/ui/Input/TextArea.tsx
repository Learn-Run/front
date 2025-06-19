'use client';

interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    wrap?: string;
    cols?: number;
    ref?: React.Ref<HTMLTextAreaElement>;
    isInvalid?: boolean;
}

const TextArea = ({
    className = '',
    wrap = 'hard',
    cols = 30,
    ref,
    isInvalid = false,
    disabled,
    ...props
}: TextAreaProps) => {
    const baseStyle =
        'w-full h-[9rem] p-3 rounded-md mb-[0.5rem] border transition-all';
    const normalStyle = 'bg-white border-slate-300 text-slate-900';
    const disabledStyle = 'bg-[#f5f5f5] text-[#a0a0a0] cursor-not-allowed';
    const invalidStyle = 'border-red-500 focus:ring-1 focus:ring-red-500';

    const computedClassName = `${baseStyle} 
  ${disabled ? disabledStyle : isInvalid ? invalidStyle : normalStyle} ${className}`;

    return (
        <textarea
            ref={ref}
            disabled={disabled}
            aria-invalid={isInvalid}
            className={computedClassName}
            wrap={wrap}
            cols={cols}
            {...props}
        />
    );
};

export default TextArea;
