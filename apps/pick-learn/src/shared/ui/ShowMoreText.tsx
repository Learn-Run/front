'use client';

import { useMemo, useState } from 'react';

export default function ShowMoreText({
    text,
    maxLength = 10,
}: {
    text: string;
    maxLength?: number;
}) {
    const [isShowMore, setIsShowMore] = useState(false);

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    const displayText = useMemo(() => {
        if (text.length <= maxLength) return text;
        return isShowMore ? text : text.slice(0, maxLength) + '...';
    }, [text, maxLength, isShowMore]);

    return (
        <div className='flex gap-2'>
            <p>
                {displayText}
                <button
                    onClick={handleShowMore}
                    className='text-xs text-gray-700'
                >
                    {isShowMore ? '접기' : ' 더보기'}
                </button>
            </p>
        </div>
    );
}
