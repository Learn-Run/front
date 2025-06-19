'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { CrossIcon, Image as ImageIcon } from 'lucide-react';
import { useAlert } from '@/hooks/useAlert';
import { uuidConverter } from '@/lib/uuidConverter';
import { deleteFileFromS3, uploadFileToS3 } from '@/apis/fetchAws.api';

interface InputImageProps {
    imageUrl?: string | null;
    setImageUrl?: (v: string | null) => void;
    imageName?: string | null;
    setImageName?: (v: string | null) => void;
    onChange?: (data: {
        imageUrl: string | null;
        imageName: string | null;
    }) => void;
    placeholder?: string;
    accept?: string;
}

export default function InputImage({
    imageUrl,
    setImageUrl,
    imageName,
    setImageName,
    onChange,
    placeholder = '이미지를 등록해주세요.',
    accept = 'image/*',
}: InputImageProps) {
    const alert = useAlert();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [internalImage, setInternalImage] = useState<string | null>(null);
    const [internalImageName, setInternalImageName] = useState<string | null>(
        null,
    );
    // 상위 또는 내부 상태 선택
    const image = imageUrl ?? internalImage;
    const setImage = setImageUrl ?? setInternalImage;
    const imageOriginName = imageName ?? internalImageName;
    const setImageOriginName = setImageName ?? setInternalImageName;

    /**
     * 이미지 업로드
     */
    const handleImageChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const { files } = event.target;
        if (!files || files.length === 0) return;
        const file = files[0];
        // 10mb 이상 이미지 업로드 방지
        if (file && file.size > 10000000) {
            alert.error('10MB 이하의 이미지 파일만 업로드 가능합니다.');
            return;
        }

        const originalName = file.name;
        const fileExtension = file.name.split('.').pop();
        const uniqueUuid = uuidConverter();
        const uniqueFileName = `${uniqueUuid}.${fileExtension}`;

        const s3Url = await uploadFileToS3(file, uniqueFileName);
        setImage(s3Url);
        setImageOriginName?.(originalName);

        // onChange 콜백 호출
        if (onChange) {
            onChange({ imageUrl: s3Url, imageName: uniqueFileName });
        }
    };

    const handleDeleteImage = async (s3Url: string) => {
        const res = await deleteFileFromS3(s3Url);
        if (!res) throw new Error('Failed to delete from S3');

        setImage(null);
        setImageOriginName?.(null);
        // input file 초기화
        if (inputRef.current) {
            inputRef.current.value = '';
        }

        // onChange 콜백 호출
        if (onChange) {
            onChange({ imageUrl: null, imageName: null });
        }
    };

    if (image) {
        return (
            <div className='overflow-hidden rounded-lg w-fit'>
                <div
                    className='relative h-[14.5625rem] w-[13rem] bg-[#D9D9D9] '
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <Image
                        src={image}
                        alt='image'
                        fill
                        priority
                        className={`backdrop-blur-md ${'backdrop-brightness-100'}`}
                        sizes='(max-width: 640px) 100vw, (max-width: 768px) 80vw, 120px'
                        style={{ objectFit: 'contain' }}
                    />
                    <input
                        type='text'
                        id='thumbnailImage'
                        name='thumbnailImage'
                        className='hidden'
                        defaultValue={image}
                    />
                </div>
                <div
                    className='flex justify-between items-center w-[13rem] h-[2rem] gap-2 px-2 bg-black text-white hover:text-brand cursor-pointer'
                    onClick={() => {
                        handleDeleteImage(image);
                    }}
                >
                    <div className='flex items-center gap-1'>
                        <ImageIcon className='size-[0.9rem]' />
                        <p className='text-[0.75rem] w-[6rem] overflow-hidden whitespace-nowrap overflow-ellipsis'>
                            {imageOriginName}
                        </p>
                    </div>
                    <CrossIcon className='rotate-45 right-2' />
                </div>
            </div>
        );
    }

    return (
        <div>
            <label
                htmlFor='courseImgInput'
                className='text-gray-500 w-full h-40 bg-[#EEEEEE] flex flex-col gap-2 justify-center items-center border-[0.05rem] rounded-lg
          hover:bg-brand-light hover:text-black cursor-pointer'
            >
                <ImageIcon className='text-gray-500 size-[2rem]' />
                <p className='text-sm'>{placeholder}</p>
            </label>
            <input
                type='file'
                id='courseImgInput'
                accept={accept}
                className='hidden'
                ref={inputRef}
                onChange={handleImageChange}
            />
        </div>
    );
}
