'use client';
import { ReactTyped } from 'react-typed';

export default function TypingWrapper({
    text,
    className,
    typeSpeed,
    backSpeed,
}: {
    text: string;
    className?: string;
    typeSpeed?: number;
    backSpeed?: number;
}) {
    const textData: string[] = text.split(',');

    return (
        <ReactTyped
            strings={textData}
            typeSpeed={typeSpeed || 50}
            backSpeed={backSpeed || 30}
            loop
            className={`text-primary font-bold ${className}`}
            smartBackspace
            showCursor
            cursorChar='<span class="text-primary font-thin pl-1">|</span>'
        />
    );
}
