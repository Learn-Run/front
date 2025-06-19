import { BreadCrumb } from '@/shared/assets/icons';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export default function BreadCrumbSection({ title }: { title: string }) {
    return (
        <SectionWrapper>
            <div className='flex items-center gap-x-2'>
                <p className='font-medium text-gray-600'>Home</p>
                <BreadCrumb />
                <p className='font-medium text-gray-600'>질문하기</p>
                <BreadCrumb />
                <p className='font-bold text-primary-100'>{title}</p>
            </div>
        </SectionWrapper>
    );
}
