'use client';
import { ReactTyped } from 'react-typed';

export default function TypingWrapper({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    const textData: string[] = text.split(',');
    return (
        <ReactTyped
            strings={textData}
            typeSpeed={50}
            backSpeed={10}
            loop
            className={`text-primary font-bold ${className}`}
            smartBackspace
            showCursor
            cursorChar='<span class="text-primary font-thin pl-1">|</span>'
        />
    );
}
