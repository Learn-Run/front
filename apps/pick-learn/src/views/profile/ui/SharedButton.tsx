import NoBoxShared from '@/shared/assets/icons/NoBoxShared';

export default function SharedButton() {
    return (
        <button className='flex items-center justify-center px-18 bg-gray-300 py-5 gap-x-4 rounded-md border-1 border-gray-400 font-semibold mt-7 mb-18'>
            <NoBoxShared />
            SHARE THIS ASKER
        </button>
    );
}
