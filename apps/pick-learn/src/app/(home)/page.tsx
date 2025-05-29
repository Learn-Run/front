import { MainWrapper } from '@/shared/ui';
import HeroSection from '@/views/home/ui/HeroSection';
import StepSection from '@/views/home/ui/StepSection';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@repo/ui/components/base/Accordion';

export default function Home() {
    return (
        <MainWrapper>
            <HeroSection />
            <StepSection />
            <Accordion type='single' collapsible className='mt-10 mb-10'>
                <AccordionItem value='item-1'>
                    <AccordionTrigger>Item 1</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </MainWrapper>
    );
}
