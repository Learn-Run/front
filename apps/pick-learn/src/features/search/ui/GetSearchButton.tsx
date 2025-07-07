'use client';
import { Button } from '@repo/ui/components/base/Button';

interface GetSearchButtonProps {
    onSearch: () => void;
}

export default function GetSearchButton({ onSearch }: GetSearchButtonProps) {
    return (
        <Button className='w-fit' type='submit' onClick={onSearch}>
            검색
        </Button>
    );
}

GetSearchButton.displayName = 'GetSearchButton';
