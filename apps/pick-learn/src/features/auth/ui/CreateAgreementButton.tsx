'use client';
import { createAgreement } from '../api';
import { agreementList } from '../model/constants';

export default function CreateAgreementButton() {
    const handleUploadAreement = async () => {
        await Promise.all(
            agreementList.map(
                async (agreement) => await createAgreement(agreement),
            ),
        );
    };

    return (
        <button onClick={handleUploadAreement} type='button'>
            upload
        </button>
    );
}
