export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    required?: boolean;
    className?: string;
    error?: string;
    children?: React.ReactNode;
}
