import { DM_Sans, Jost, Poppins } from 'next/font/google';

export const dmSans = DM_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

export const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

export const jost = Jost({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});
