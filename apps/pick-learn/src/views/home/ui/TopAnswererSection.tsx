import Heading from '@/widgets/home/ui/Heading';
import TopAnswererCardList from './TopAnswererCardList';

//FIXME: 디자인에맞게 css 수정 필요
export default function TopAnswererSection() {
    return (
        <section className='min-h-screen space-y-10 my-25'>
            <Heading align='center' className='space-y-4'>
                <Heading.Title>
                    Top Answerer <br />
                    Hiring Now!
                </Heading.Title>
                <Heading.SubTitle>
                    답을 찾아 드리는 핵답러들!!!
                </Heading.SubTitle>
            </Heading>
            <TopAnswererCardList />
        </section>
    );
}
