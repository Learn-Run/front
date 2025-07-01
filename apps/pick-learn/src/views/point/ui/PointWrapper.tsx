import PointChargeList from './PointChargeList';

export default function PointWrapper({ type }: { type: string }) {
    if (!type) {
        return <PointChargeList />;
    }

    if (type === 'CHARGE') {
        return <PointChargeList />;
    }

    if (type === 'HISTORY') {
        return <div>PointWrapper</div>;
    }

    if (type === 'PAYMENT') {
        return <div>PointWrapper</div>;
    }
}
