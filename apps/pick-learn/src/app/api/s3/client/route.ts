import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

export async function POST(req: NextRequest) {
    try {
        const { fileName, fileType, fileContent, directory } = await req.json();
        console.log('Received fileName:', fileName);
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME!,
            Key: `${directory}/${Date.now()}-${fileName}`,
            Body: Buffer.from(fileContent, 'base64'),
            ContentType: fileType,
        };

        const command = new PutObjectCommand(params);
        await s3Client.send(command);

        const imageUrl = `${process.env.AWS_CLOUDFRONT_DOMAIN}/${params.Key}`;
        console.log('File uploaded successfully:', imageUrl);
        return NextResponse.json({ imageUrl });
    } catch (error) {
        console.error('Error uploading to S3:', error);
        return NextResponse.json(
            { error: 'Failed to upload file' },
            { status: 500 },
        );
    }
}
