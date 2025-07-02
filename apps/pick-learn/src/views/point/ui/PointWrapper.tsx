import PaymentHistory from '@/entities/point/ui/PaymentHistory';
import PointChargeList from './PointChargeList';
import PointHistoryList from './PointHistoryList';

export default function PointWrapper({ type }: { type: string }) {
    if (!type) {
        return <PointChargeList />;
    }

    if (type === 'CHARGE') {
        return <PointChargeList />;
    }

    if (type === 'HISTORY') {
        return <PointHistoryList />;
    }

    if (type === 'PAYMENT') {
        return <PaymentHistory />;
    }
}
