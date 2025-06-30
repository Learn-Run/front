'use client';
import { useEffect, useRef } from 'react';

interface UseInfiniteScrollOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
    enabled?: boolean;
}

export function useInfiniteScroll(
    onIntersect: () => void,
    options: UseInfiniteScrollOptions = {},
) {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (!options.enabled) return;
        if (!targetRef.current) return;

        observerRef.current = new window.IntersectionObserver(
            (entries) => {
                if (Array.isArray(entries) && entries[0]?.isIntersecting) {
                    onIntersect();
                }
            },
            {
                root: options.root || null,
                rootMargin: options.rootMargin || '0px',
                threshold: options.threshold || 0.1,
            },
        );

        observerRef.current.observe(targetRef.current);

        return () => {
            observerRef.current?.disconnect();
        };
    }, [
        targetRef.current,
        options.root,
        options.rootMargin,
        options.threshold,
        options.enabled,
    ]);

    return targetRef;
}
