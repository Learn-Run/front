import { Suspense } from 'react';

import SubMenu from '@/widgets/layout/ui/SubMenu';

export default async function page() {
    return (
        <div>
            <Suspense>
                <SubMenu />
            </Suspense>
        </div>
    );
}
