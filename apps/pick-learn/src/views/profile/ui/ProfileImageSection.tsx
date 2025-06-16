import SharedButton from './SharedButton';
import ProfileImage from './ProfileImage';

export default function ProfileImageSection() {
    return (
        <section className='flex flex-col items-start justify-start container mx-auto'>
            <div className='flex flex-col items-center'>
                <ProfileImage />
            </div>
            <span className='text-2xl font-semibold mt-3'>@nickname</span>
            <SharedButton />
        </section>
    );
}
