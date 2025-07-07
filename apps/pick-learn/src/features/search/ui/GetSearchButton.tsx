'use client';
import { Button } from '@repo/ui/components/base/Button';

export default function GetSearchButton() {
    const handleSearch = () => {
        console.log('검색');
    };
    return (
        <Button className='w-fit' onClick={handleSearch}>
            검색
        </Button>
    );
}
