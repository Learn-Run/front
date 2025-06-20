import { Check } from '../assets/icons';

export default function StatusCheckIcon({ status }: { status: boolean }) {
    if (!status) return;

    return <Check />;
}
