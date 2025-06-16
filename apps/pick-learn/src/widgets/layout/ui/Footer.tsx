import { Logo } from '@/shared/assets/icons';

export default function Footer() {
    return (
        <footer className=' w-full bg-black mb-[57px] md:mb-0'>
            <div className='flex items-start container mx-auto border-b border-gray-700 py-6 px-5 max-w-[1280px]'>
                <Logo className='max-w-[100px]' />
            </div>
            <div className='flex justify-between container mx-auto py-8 text-white text-sm flex-wrap md:flex-nowrap px-5 max-w-[1280px]'>
                <p>© 2025 Ferezob Job Finder. All rights reserved.</p>
                <p>Terms & Conditions | Privacy Policy</p>
            </div>
        </footer>
    );
}
