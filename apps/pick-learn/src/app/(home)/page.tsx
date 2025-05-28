import StepSection from '@/views/home/ui/StepSection';
import Heading from '@/widgets/home/ui/Heading';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@repo/ui/components/base/Accordion';

export default function Home() {
    return (
        <main className='container mx-auto px-5'>
            <Heading align='center'>
                <Heading.Title>
                    내가 찾는 답은 여기에
                    <br /> PICK & LEARN
                </Heading.Title>
                <Heading.SubTitle>
                    궁금한 점이 생기면 언제든지 질문하세요. <br />
                    다양한 사람들이 함께 답을 찾고 지식을 나누는 열린 커뮤니티
                    입니다.
                </Heading.SubTitle>
            </Heading>
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
        </main>
    );
}
