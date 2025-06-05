'use client';
import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox } from '@repo/ui/components/base/Checkbox';
import { useModalContext } from '@/shared/model/modal/ModalContext';
import Close from '@/shared/assets/icons/Close';

interface Props {
    agreementName: string;
    required?: boolean;
    agreementUuid: string;
    agreementContent: string;
}

export function AgreeTermCheckbox({
    agreementName,
    agreementUuid,
    required,
    agreementContent,
}: Props) {
    const { control } = useFormContext();
    const { openModal, closeModal } = useModalContext();

    return (
        <Controller
            name='agreementCheckList'
            control={control}
            render={({ field }) => (
                <div className='flex items-center gap-2'>
                    <Checkbox
                        id={agreementName}
                        value={agreementUuid}
                        checked={field.value?.includes(agreementUuid)}
                        onCheckedChange={(checked) => {
                            if (checked) {
                                field.onChange([
                                    ...(field.value || []),
                                    agreementUuid,
                                ]);
                            } else {
                                field.onChange(
                                    (field.value || []).filter(
                                        (id: string) => id !== agreementUuid,
                                    ),
                                );
                            }
                        }}
                        required={required}
                    />
                    <label
                        htmlFor={agreementName}
                        className='text-primary-100 text-sm w-full flex justify-between items-center'
                    >
                        <span>
                            {required
                                ? '[필수] ' + agreementName
                                : '[선택] ' + agreementName}
                        </span>
                        <button
                            type='button'
                            className='text-gray-600 cursor-pointer'
                            onClick={() =>
                                openModal(
                                    <div className='p-5'>
                                        <button
                                            type='button'
                                            onClick={() => closeModal()}
                                            className='cursor-pointer'
                                        >
                                            <Close />
                                        </button>
                                        <h3>{agreementName}</h3>
                                        <p>{agreementContent}</p>
                                    </div>,
                                )
                            }
                        >
                            자세히 보기
                        </button>
                    </label>
                </div>
            )}
        />
    );
}
