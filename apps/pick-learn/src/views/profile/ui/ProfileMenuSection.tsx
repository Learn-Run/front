import MyAskCardList from './MyActiveCardList';
import ProfileMenu from './ProfileMenu';

export default function ProfileMenuSection() {
    return (
        <section className='flex flex-col md:flex-row gap-x-5 container mx-auto'>
            <ProfileMenu />
            <MyAskCardList />
        </section>
    );
}
