import { z } from 'zod';

export const postWriteSchema = z.object({
    title: z.string({
        required_error: '제목을 입력해주세요',
    }),
    contents: z.string({
        required_error: '내용을 입력해주세요',
    }),
    mainCategoryId: z.number({
        required_error: '카테고리를 선택해주세요',
    }),
    subCategoryId: z.number({
        required_error: '서브카테고리를 선택해주세요',
    }),
});

export type PostWriteSchemaType = z.infer<typeof postWriteSchema>;
