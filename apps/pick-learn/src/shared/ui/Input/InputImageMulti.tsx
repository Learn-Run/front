'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { X, Loader2, Image as ImageIcon } from 'lucide-react';
import { useAlert } from '@/hooks/useAlert';
import { uuidConverter } from '@/lib/uuidConverter';
import { deleteFileFromS3, uploadFileToS3 } from '@/apis/fetchAws.api';

interface ImageItem {
    url: string;
    name: string;
    id?: number;
}

interface InputImageMultiProps {
    imageItems?: ImageItem[] | null;
    setImageItems?: (v: ImageItem[] | null) => void;
    onChange?: (data: ImageItem[]) => void;
    placeholder?: string;
    accept?: string;
    maxSizeMB?: number;
    maxFiles?: number;
    multiple?: boolean;
}

export default function InputImageMulti({
    imageItems,
    setImageItems,
    onChange,
    placeholder = '이미지를 등록해주세요.',
    accept = 'image/*',
    maxSizeMB = 10,
    maxFiles = 5,
    multiple = true,
}: InputImageMultiProps) {
    const alert = useAlert();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [loading, setLoading] = useState(false);

    const [internalImages, setInternalImages] = useState<ImageItem[]>([]);

    // 상위 또는 내부 상태 선택
    const images: ImageItem[] = imageItems ?? internalImages;

    const setImages = (newImages: ImageItem[] | null) => {
        if (imageItems && setImageItems) {
            if (!newImages) {
                setImageItems([]);
                return;
            }
            setImageItems(newImages);
        } else {
            setInternalImages(newImages || []);
        }

        // onChange 콜백 호출
        if (onChange) {
            onChange(newImages || []);
        }
    };

    /**
     * 이미지 업로드
     */
    const handleImageChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const { files: selectedFiles } = event.target;
        if (!selectedFiles || selectedFiles.length === 0) return;

        // 파일 수 체크
        if (images.length + selectedFiles.length > maxFiles) {
            alert.error(`최대 ${maxFiles}개의 이미지만 업로드 가능합니다.`);
            return;
        }

        setLoading(true);
        const newImages = [...images];

        try {
            for (let i = 0; i < selectedFiles.length; i++) {
                const file = selectedFiles[i];

                // 최대 용량 체크
                const maxSizeBytes = maxSizeMB * 1024 * 1024;
                if (file.size > maxSizeBytes) {
                    alert.error(
                        `${file.name}(${(file.size / (1024 * 1024)).toFixed(
                            2,
                        )}MB)이 ${maxSizeMB}MB 제한을 초과합니다.`,
                    );
                    continue;
                }

                const originalFileName = file.name;
                const fileExtension = originalFileName.split('.').pop() || '';
                const uniqueUuid = uuidConverter();
                const uniqueFileName = `${uniqueUuid}.${fileExtension}`;

                try {
                    console.log('이미지 업로드 시작:', file.name, file.type);
                    const s3Url = await uploadFileToS3(file, uniqueFileName);
                    console.log('이미지 업로드 완료:', s3Url);

                    newImages.push({
                        url: s3Url,
                        name: originalFileName,
                    });
                } catch (error) {
                    console.error('이미지 업로드 실패:', error);
                    alert.error(`${file.name} 업로드에 실패했습니다.`);
                }
            }

            setImages(newImages);
        } catch (error) {
            console.error('이미지 처리 중 오류:', error);
            alert.error('이미지 업로드 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
            // 입력 필드 초기화
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    };

    const handleDeleteImage = async (imageToDelete: ImageItem) => {
        try {
            setLoading(true);
            console.log('이미지 삭제 시작:', imageToDelete.url);
            const res = await deleteFileFromS3(imageToDelete.url);
            if (!res) throw new Error('Failed to delete from S3');

            console.log('이미지 삭제 완료');
            const newImages = images.filter(
                (img) => img.url !== imageToDelete.url,
            );
            setImages(newImages.length > 0 ? newImages : null);
        } catch (error) {
            console.error('이미지 삭제 실패:', error);
            alert.error('이미지 삭제에 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* 최대 이미지 개수에 도달하지 않았을 때만 업로드 UI 표시 */}
            {images.length < maxFiles && (
                <>
                    <label
                        htmlFor='imageInput'
                        className={`flex flex-col items-center justify-center w-full h-40 px-4 
              transition-colors border-gray-300 border-[0.05rem] rounded-lg bg-[#EEEEEE]
              hover:bg-brand-light hover:text-black cursor-pointer
              ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                            {loading ? (
                                <Loader2 className='w-8 h-8 mb-2 text-gray-500 animate-spin' />
                            ) : (
                                <ImageIcon className='w-8 h-8 mb-2 text-gray-500' />
                            )}
                            <p className='mb-1 text-sm text-gray-500'>
                                {placeholder}
                            </p>
                            <p className='text-xs text-gray-400'>
                                {multiple
                                    ? `최대 ${maxFiles}개 이미지 (${images.length}/${maxFiles})`
                                    : '클릭하여 이미지 선택'}
                            </p>
                        </div>
                    </label>
                    <input
                        type='file'
                        id='imageInput'
                        accept={accept}
                        className='hidden'
                        ref={inputRef}
                        onChange={handleImageChange}
                        multiple={multiple}
                        disabled={loading}
                    />
                </>
            )}

            {images.length > 0 && (
                <div className='grid grid-flow-row-dense grid-cols-1 gap-4 my-6 transition-all sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md'>
                    {images.map((img) => (
                        <div
                            key={img.url}
                            className='w-full row-span-1 overflow-hidden bg-white rounded-md h-fit'
                        >
                            <div
                                className='relative w-full h-48'
                                style={{
                                    backgroundImage: `url(${img.url})`,
                                    backgroundSize: 'cover',
                                }}
                            >
                                <Image
                                    src={img.url}
                                    alt={img.name}
                                    fill
                                    className={`backdrop-blur-md ${'backdrop-brightness-100'}`}
                                    sizes='(max-width: 640px) 100vw, (max-width: 768px) 80vw, 120px'
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div
                                className='flex justify-between items-center w-full h-[2rem] gap-2 px-2 bg-black text-white hover:text-brand cursor-pointer'
                                onClick={() => handleDeleteImage(img)}
                            >
                                <div className='flex items-center gap-1'>
                                    <ImageIcon className='size-[0.9rem]' />
                                    <p className='text-[0.75rem] w-[6rem] overflow-hidden whitespace-nowrap overflow-ellipsis'>
                                        {img.name}
                                    </p>
                                </div>
                                <X className='w-4 h-4' />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* 히든 인풋 - 폼 전송용 */}
            {images.map((img, i) => (
                <input
                    key={`hidden-${i}`}
                    type='hidden'
                    name={`uploadedImage${i}`}
                    value={img.url}
                />
            ))}
        </div>
    );
}
