async function uploadFileToS3(file: File, fileName: string, directory: string) {
    const formData = new FormData();
    formData.append('fileName', file.name);
    formData.append('fileType', file.type);

    // FileReader를 사용하여 파일을 Base64로 변환
    const base64File = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

    // Base64 데이터에서 실제 파일 데이터만 추출 (data URL의 앞부분 제거)
    const base64Data = base64File.split(',')[1];
    formData.append('fileContent', base64Data as string);

    // App Router 방식의 API 호출 경로
    const res = await fetch('/api/s3/client', {
        method: 'POST',
        body: JSON.stringify({
            fileName: file.name,
            fileType: file.type,
            fileContent: base64Data,
            directory: directory,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error('Failed to upload file');
    }

    const data = await res.json();
    return data.imageUrl; // S3에 업로드된 파일의 URL 반환
}

export { uploadFileToS3 };
