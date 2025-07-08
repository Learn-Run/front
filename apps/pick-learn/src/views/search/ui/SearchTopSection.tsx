import SearchButton from '@/features/search/ui/SearchButton';
import Heading from '@/widgets/home/ui/Heading';

export default function SearchTopSection() {
    return (
        <section className='flex flex-col items-center px-5 justify-center bg-gradient-to-b from-secondary-100 to-[#f7f2f3] min-h-[554px]'>
            <Heading className='text-center'>
                <Heading.Title className='font-medium'>질문 보기</Heading.Title>
            </Heading>
            <SearchButton />
        </section>
    );
}
