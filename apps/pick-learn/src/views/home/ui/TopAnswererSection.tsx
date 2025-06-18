import Heading from '@/widgets/home/ui/Heading';
import TopAnswererCardList from './TopAnswererCardList';
import StepWrapper from '@/shared/ui/Wrapper/StepWrapper';

export default function TopAnswererSection() {
    return (
        <StepWrapper className='bg-point-skyblue-100'>
            <Heading align='center' className='space-y-4'>
                <Heading.Title>
                    Top Answerer <br />
                    Hiring Now!
                </Heading.Title>
                <Heading.SubTitle className='mb-20'>
                    답을 찾아 드리는 핵답러들!!!
                </Heading.SubTitle>
            </Heading>
            <TopAnswererCardList />
        </StepWrapper>
    );
}
