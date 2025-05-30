import { stepList } from '../model/constants';
import StepCard from '@/widgets/home/ui/StepCard';

export default function StepCardList() {
    return (
        <ul className='col-span-1 md:col-span-8 md:col-start-6 order-2 md:order-none  gap-6 hidden md:flex'>
            {stepList.map(({ icon: Icon, ...item }) => (
                <StepCard key={item.id}>
                    <StepCard.Icon>
                        <Icon />
                    </StepCard.Icon>
                    <StepCard.Contents
                        number={item.id}
                        title={item.title}
                        description={item.description}
                    />
                </StepCard>
            ))}
        </ul>
    );
}
