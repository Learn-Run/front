import { Logo } from '@/shared/assets/icons';

export default function Footer() {
    return (
        <footer className=' w-full bg-black'>
            <div className='flex items-start container mx-auto py-6 px-5 '>
                <Logo className='max-w-[100px]' />
            </div>
            <hr className='border border-gray-700' />
            <div className='flex justify-between container mx-auto py-8 text-white text-sm flex-wrap md:flex-nowrap px-5 '>
                <p>© 2025 Ferezob Job Finder. All rights reserved.</p>
                <p>Terms & Conditions | Privacy Policy</p>
            </div>
        </footer>
    );
}
