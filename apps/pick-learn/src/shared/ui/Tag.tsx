export default function Tag({ children }: { children: React.ReactNode }) {
    return (
        <div className='border border-gray-500 rounded-lg w-fit px-3 py-1.5 font-semibold text-gray-500'>
            {children}
        </div>
    );
}
