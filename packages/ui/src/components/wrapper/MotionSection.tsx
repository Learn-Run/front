'use client';
import { motion } from 'framer-motion';
import { HtmlHTMLAttributes, useEffect, useRef, useState } from 'react';

export default function MotionSection({
    children,
    className,
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: HtmlHTMLAttributes<HTMLElement>['id'];
}) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const checkVisibility = () => {
        if (scrollRef.current) {
            const { top, bottom } = scrollRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight && bottom > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    useEffect(() => {
        checkVisibility();
        window.addEventListener('scroll', checkVisibility);
        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, translateY: -150 },
        visible: {
            opacity: 1,
            translateY: 0,
            transition: { duration: 1, ease: 'easeInOut' },
        },
    };

    return (
        <motion.section
            ref={scrollRef}
            variants={containerVariants}
            initial='hidden'
            className={className}
            animate={isVisible ? 'visible' : 'hidden'}
            id={id}
        >
            {Array.isArray(children)
                ? children.map((child, index) => (
                      <motion.div
                          key={index}
                          variants={childVariants}
                          className='w-full'
                      >
                          {child}
                      </motion.div>
                  ))
                : children}
        </motion.section>
    );
}
