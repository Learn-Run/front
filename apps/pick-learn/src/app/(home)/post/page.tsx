import SubMenu from '@/widgets/layout/ui/SubMenu';
import { Suspense } from 'react';

export default async function page() {
    return (
        <div>
            <Suspense>
                <SubMenu />
            </Suspense>
        </div>
    );
}
