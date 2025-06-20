import type { AgreeTermType } from '../api/types';
import type { SignUpStepsType } from './types';

export const applyServerFields = (
    steps: SignUpStepsType[],
    serverFields: AgreeTermType[],
) => {
    const updated = steps.map((step) => ({
        ...step,
        requiredFields: [...step.requiredFields],
    }));

    serverFields.forEach(({ agreementUuid, required }) => {
        if (!required) return;
        const step = updated.find((s) => s.id === 1);
        if (step && !step.requiredFields.includes(agreementUuid)) {
            step.requiredFields.push(agreementUuid);
        }
    });

    return updated;
};
