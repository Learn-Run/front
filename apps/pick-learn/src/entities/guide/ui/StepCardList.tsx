import { stepList } from '../model/constants';
import StepCard from '@/entities/guide/ui/StepCard';

export default function StepCardList() {
    return (
        <ul className='col-span-1 lg:col-span-7 xl:col-span-8 gap-6 lg:justify-end hidden md:flex '>
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
