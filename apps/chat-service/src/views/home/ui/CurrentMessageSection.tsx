import CurrentMassageTop from './CurrentMassageTop';
import CurrentMassageList from './CurrentMassageList';

export default function CurrentMessage() {
    return (
        <div className='border border-gray-300 rounded-xl bg-white gap-x-2 lg:col-span-1 w-full p-5'>
            <CurrentMassageTop />
            <CurrentMassageList />
        </div>
    );
}
