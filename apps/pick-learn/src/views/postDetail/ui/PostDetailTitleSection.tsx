import { cn } from '@repo/ui/lib/utils';
import { jost } from '@/shared/assets/fonts';
import Heading from '@/widgets/home/ui/Heading';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export default function PostDetailTitleSection({ title }: { title: string }) {
    return (
        <SectionWrapper className='pt-11'>
            <Heading.Title className={cn(jost.className, 'text-3xl ')}>
                {title}
            </Heading.Title>
        </SectionWrapper>
    );
}
