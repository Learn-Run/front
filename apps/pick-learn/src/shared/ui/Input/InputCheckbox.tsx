interface InputCheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export default function InputCheckbox({
    label,
    className = '',
    ...props
}: InputCheckboxProps) {
    return (
        <label className='inline-flex items-center gap-2 cursor-pointer'>
            <input
                type='checkbox'
                className={`
          bg-white border rounded-[3px] appearance-none size-4 border-slate-300 accent-brand 
          checked:appearance-none checked:bg-brand checked:border-brand
          disabled:bg-[#f5f5f5] disabled:border-slate-300 disabled:cursor-not-allowed disabled:opacity-60
          ${className}
        `}
                {...props}
            />
            {label && <span className='text-sm text-[#202020]'>{label}</span>}
        </label>
    );
}
