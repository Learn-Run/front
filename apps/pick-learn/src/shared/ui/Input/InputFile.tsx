'use client';

import { useRef, useState } from 'react';
import { File, X, Loader2, Paperclip } from 'lucide-react';

import { useAlert } from '@/hooks/useAlert';
import { uuidConverter } from '@/lib/Alert/uuidConverter';
import { deleteFileFromS3, uploadFileToS3 } from '@/actions/common/s3-service';

interface FileItem {
    url: string;
    name: string;
    id?: number;
}

interface InputFileProps {
    fileItems?: FileItem[] | null;
    setFileItems?: (v: FileItem[] | null) => void;

    onChange?: (data: FileItem[]) => void;
    placeholder?: string;
    accept?: string;
    maxSizeMB?: number;
    maxFiles?: number;
    multiple?: boolean;
}

export default function InputFile({
    fileItems,
    setFileItems,
    onChange,
    placeholder = '파일을 등록해주세요.',
    accept = '*/*',
    maxSizeMB = 10,
    maxFiles = 1,
    multiple = false,
}: InputFileProps) {
    const alert = useAlert();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [loading, setLoading] = useState(false);

    const [internalFiles, setInternalFiles] = useState<FileItem[]>([]);

    // 상위 또는 내부 상태 선택
    const files: FileItem[] = fileItems ?? internalFiles;

    const setFiles = (newFiles: FileItem[] | null) => {
        if (fileItems && setFileItems) {
            if (!newFiles) {
                setFileItems([]);
                return;
            }
            setFileItems(newFiles);
        } else {
            setInternalFiles(newFiles || []);
        }

        // onChange 콜백 호출
        if (onChange) {
            onChange(newFiles || []);
        }
    };

    /**
     * 파일 업로드
     */
    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const { files: selectedFiles } = event.target;
        if (!selectedFiles || selectedFiles.length === 0) return;

        // 파일 수 체크
        if (files.length + selectedFiles.length > maxFiles) {
            alert.error(`최대 ${maxFiles}개의 파일만 업로드 가능합니다.`);
            return;
        }

        setLoading(true);
        const newFiles = [...files];

        try {
            for (let i = 0; i < selectedFiles.length; i++) {
                const file = selectedFiles[i];

                // 최대 용량 체크
                const maxSizeBytes = maxSizeMB * 1024 * 1024;
                if (file && file.size > maxSizeBytes) {
                    alert.error(
                        `${file.name}(${(file.size / (1024 * 1024)).toFixed(
                            2,
                        )}MB)이 ${maxSizeMB}MB 제한을 초과합니다.`,
                    );
                    continue;
                }

                const originalFileName = file?.name;
                const fileExtension = originalFileName?.split('.').pop() || '';
                const uniqueUuid = uuidConverter();
                const uniqueFileName = `${uniqueUuid}.${fileExtension}`;

                try {
                    console.log('파일 업로드 시작:', file?.name, file?.type);
                    if (!file) throw new Error('File is undefined');
                    const s3Url = await uploadFileToS3(file, uniqueFileName);
                    console.log('파일 업로드 완료:', s3Url);

                    newFiles.push({
                        url: s3Url,
                        name: originalFileName || '',
                    });
                } catch (error) {
                    console.error('파일 업로드 실패:', error);
                    alert.error(`${file?.name} 업로드에 실패했습니다.`);
                }
            }

            setFiles(newFiles);
        } catch (error) {
            console.error('파일 처리 중 오류:', error);
            alert.error('파일 업로드 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
            // 입력 필드 초기화
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    };

    const handleDeleteFile = async (fileToDelete: FileItem) => {
        try {
            setLoading(true);
            console.log('파일 삭제 시작:', fileToDelete.url);
            const res = await deleteFileFromS3(fileToDelete.url);
            if (!res) throw new Error('Failed to delete from S3');

            console.log('파일 삭제 완료');
            const newFiles = files.filter(
                (file) => file.url !== fileToDelete.url,
            );
            setFiles(newFiles.length > 0 ? newFiles : null);
        } catch (error) {
            console.error('파일 삭제 실패:', error);
            alert.error('파일 삭제에 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* 최대 파일 개수에 도달하지 않았을 때만 업로드 UI 표시 */}
            {files.length < maxFiles && (
                <>
                    <label
                        htmlFor='fileInput'
                        className={`flex flex-col items-center justify-center w-full h-40 px-4 
              transition-colors border-gray-300 border-[0.05rem] rounded-lg bg-[#EEEEEE]
              hover:bg-brand-light hover:text-black cursor-pointer
              ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                            {loading ? (
                                <Loader2 className='w-8 h-8 mb-2 text-gray-500 animate-spin' />
                            ) : (
                                <File className='w-8 h-8 mb-2 text-gray-500' />
                            )}
                            <p className='mb-1 text-sm text-gray-500'>
                                {placeholder}
                            </p>
                            <p className='text-xs text-gray-400'>
                                {multiple
                                    ? `최대 ${maxFiles}개 파일 (${files.length}/${maxFiles})`
                                    : '클릭하여 파일 선택'}
                            </p>
                        </div>
                    </label>
                    <input
                        type='file'
                        id='fileInput'
                        accept={accept}
                        className='hidden'
                        ref={inputRef}
                        onChange={handleFileChange}
                        multiple={multiple}
                        disabled={loading}
                    />
                </>
            )}

            {files.length > 0 && (
                <div className='grid grid-flow-row-dense grid-cols-1 gap-2 my-6 transition-all sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md'>
                    {files.map((file) => (
                        <div
                            key={file.url}
                            className='w-full row-span-1 p-2 bg-white rounded-md h-fit'
                        >
                            <div className='flex items-center justify-between gap-2 p-2'>
                                <div className='flex items-center gap-2 overflow-hidden'>
                                    <Paperclip className='flex-shrink-0 w-5 h-5 text-gray-500' />
                                    <p
                                        className='text-sm truncate'
                                        title={file.name}
                                    >
                                        {file.name}
                                    </p>
                                </div>
                                <button
                                    type='button'
                                    className='flex items-center justify-center w-6 h-6 transition-colors bg-gray-200 rounded-full hover:bg-gray-300'
                                    onClick={() => handleDeleteFile(file)}
                                    aria-label='삭제'
                                    disabled={loading}
                                >
                                    <X className='w-4 h-4' />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* 히든 인풋 - 폼 전송용 */}
            {files.map((file, i) => (
                <input
                    key={`hidden-${i}`}
                    type='hidden'
                    name={`uploadedFile${i}`}
                    value={file.url}
                />
            ))}
        </div>
    );
}
