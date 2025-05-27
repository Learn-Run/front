import Image from 'next/image';
import logo from '@/shared/assets/icons/logo.png';

export default function Logo() {
    return (
        <h1 className='relative w-full min-w-[120px] max-w-[150px] 2xl:max-w-[200px] h-[50px]'>
            <Image
                src={logo.src}
                alt='logo'
                fill
                className='object-contain w-full'
                sizes='100%'
            />
        </h1>
    );
}
