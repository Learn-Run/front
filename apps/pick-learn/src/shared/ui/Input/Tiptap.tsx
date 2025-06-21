'use client';
import {
    useEditor,
    EditorContent,
    type Editor,
    ReactNodeViewRenderer,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useRef, useState } from 'react';
import Image from '@tiptap/extension-image';
import { Image as ImageIcon } from 'lucide-react';

import styles from './Tiptap.module.css';
import { cn } from '@repo/ui/lib/utils';
import { useAlert } from '@/features/post/model/hooks/useAlert';
import { uuidConverter } from '@/shared/lib/Alert/uuidConverter';
import { uploadFileToS3 } from '@/shared/api/s3-service';
import { ResizableImageComponent } from './ResizableImageComponent';

export const ResizableImage = Image.extend({
    // addAttributes() 오버라이드
    addAttributes() {
        return {
            ...this.parent?.(), // 기본 속성들 유지
            width: {
                default: null,
                parseHTML: (element) => {
                    const w = element.getAttribute('data-width');
                    return w ? Number(w) : null;
                },
                renderHTML: (attrs) => {
                    if (!attrs.width) return {};
                    return {
                        'data-width': attrs.width,
                    };
                },
            },
            height: {
                default: null,
                parseHTML: (element) => {
                    const h = element.getAttribute('data-height');
                    return h ? Number(h) : null;
                },
                renderHTML: (attrs) => {
                    if (!attrs.height) return {};
                    return {
                        'data-height': attrs.height,
                    };
                },
            },
            style: {
                default: null, // 기본값 제거
                parseHTML: (el) => el.getAttribute('style'),
                renderHTML: (attrs) => {
                    if (!attrs.width || !attrs.height) return {};
                    return {
                        style: `
              width: ${attrs.width}px !important;
              height: ${attrs.height}px !important;
              object-fit: fill;
            `,
                    };
                },
            },
        };
    },

    addNodeView() {
        return ReactNodeViewRenderer(ResizableImageComponent);
    },
});

interface ToolBarProps {
    editor: Editor | null;
    handleImageClick?: () => void;
}

const ToolBar = ({ editor, handleImageClick }: ToolBarProps) => {
    if (!editor) return null;

    const btnClass = (active: boolean) =>
        `px-2 py-1 rounded transition ${
            active
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'hover:bg-gray-100 text-gray-700'
        }`;

    return (
        <div className='sticky top-0 z-10 flex items-center gap-2 px-4 py-2 bg-white border-b shadow-sm'>
            {/* 헤딩 */}
            {([1, 2] as const).map((level) => (
                <button
                    type='button'
                    key={level}
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level }).run()
                    }
                    className={`
            px-2 py-1 rounded 
            ${
                editor.isActive('heading', { level })
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'hover:bg-gray-100 text-gray-700'
            }
            transition
          `}
                >
                    H{level}
                </button>
            ))}

            {/* 스타일 */}
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`
          px-2 py-1 rounded 
          ${
              editor.isActive('bold')
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'hover:bg-gray-100 text-gray-700'
          }
          transition
        `}
            >
                B
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`
          px-2 py-1 rounded italic
          ${
              editor.isActive('italic')
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-gray-100 text-gray-700'
          }
          transition
        `}
            >
                I
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`
          px-2 py-1 rounded line-through
          ${
              editor.isActive('strike')
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-gray-100 text-gray-700'
          }
          transition
        `}
            >
                S
            </button>

            {/* 리스트 */}
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={btnClass(editor.isActive('bulletList'))}
            >
                • List
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={btnClass(editor.isActive('orderedList'))}
            >
                1. List
            </button>

            {/* 이미지 */}
            <button type='button' onClick={handleImageClick} className=''>
                <ImageIcon />
            </button>
        </div>
    );
};

interface TiptapProps {
    readOnly?: boolean;
    className?: string;
    placeholder?: string;
    isInvalid?: boolean;
    disabled?: boolean;
    maxHeight?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Tiptap = ({
    className = '',
    placeholder = '내용을 입력하세요',
    isInvalid = false,
    disabled = false,
    maxHeight,
    name,
    value,
    onChange,
    readOnly = false,
}: TiptapProps) => {
    // hidden input value 관리
    const [content, setContent] = useState(value ?? '');
    const alert = useAlert();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const extensions = [
        StarterKit.configure({
            // ToolBar에서 사용하는 기능 제외 비활성화
            heading: {
                levels: [1, 2], // H1, H2만 허용
            },
            // === 텍스트 스타일 관련 ===
            // bold: false, // **굵게** 또는 Ctrl+B
            // italic: false, // *기울임* 또는 Ctrl+I
            // strike: false, // ~~취소선~~
            // code: false, // `인라인 코드`

            // === 블록 요소 관련 ===
            // paragraph: false, // <p> 태그 (거의 사용 안함)
            // blockquote: false, // > 인용구
            // codeBlock: false, // ``` 코드블록
            // horizontalRule: false, // --- 구분선

            // === 리스트 관련 ===
            // bulletList: false, // • 불릿 리스트
            // orderedList: false, // 1. 숫자 리스트
            // listItem: false, // 리스트 아이템

            // === 줄바꿈 관련 ===
            // hardBreak: false, // Shift+Enter 강제 줄바꿈

            // === 편집 기능 관련 ===
            // dropcursor: false, // 드래그 시 커서 표시
            // gapcursor: false, // 블록 사이 빈 공간 클릭 커서
            // history: false, // Ctrl+Z 실행취소 기능

            // === 기타 ===
            // document: false, // 문서 구조  (거의 사용 안함)
            // text: false, // 텍스트 노드  (거의 사용 안함)
        }),
        readOnly
            ? Image.configure({
                  inline: false,
                  allowBase64: false,
              })
            : ResizableImage.configure({
                  inline: false,
                  allowBase64: false,
              }),
    ];

    const editor = useEditor({
        editable: !readOnly,
        extensions,
        content: value ?? placeholder,
        immediatelyRender: false,
    });

    const baseStyle =
        'prose prose-lg prose-neutral max-w-none mx-auto p-3 transition-all';
    const normalStyle = 'bg-white text-slate-900';
    const disabledStyle = 'bg-gray-100 text-gray-400 cursor-not-allowed';
    const invalidStyle = 'border-red-500 ring-1 ring-red-500';

    const computedClasses = [
        'ProseMirror', // Tiptap 기본 클래스
        'focus:outline-none focus:ring-0',
        baseStyle,
        disabled ? disabledStyle : isInvalid ? invalidStyle : normalStyle,
        className,
        styles['editor-content'],
    ]
        .filter(Boolean)
        .join(' ');

    // style 객체에 height 추가
    const style: React.CSSProperties = { outline: 'none', cursor: 'text' };
    if (maxHeight) {
        style.minHeight = maxHeight;
        style.maxHeight = maxHeight;
        style.overflowY = 'auto'; // 넘칠 경우 스크롤
    }

    // 이미지 버튼 클릭 시 파일 다이얼로그 열기
    const handleImageClick = () => {
        inputRef.current?.click();
    };

    // 파일 선택 → S3 업로드 → 에디터에 삽입
    const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = async (
        e,
    ) => {
        const file = e.target.files?.[0];
        console.log(file);
        if (!file || !editor) return;

        // 용량 체크
        if (file.size > 10 * 1024 * 1024) {
            alert.error('10MB 이하 파일만 가능합니다.');
            return;
        }

        // 고유 이름 생성
        const ext = file.name.split('.').pop();
        const key = `${uuidConverter()}.${ext}`;

        // S3 업로드
        let s3Url: string;
        try {
            s3Url = await uploadFileToS3(file, key);
        } catch {
            alert.error('업로드에 실패했습니다.');
            return;
        }

        // 에디터에 이미지 삽입
        editor.chain().focus().setImage({ src: s3Url, alt: file.name }).run();

        // 숨은 input 리셋
        e.target.value = '';
    };

    // 에디터 업데이트 시 가짜 이벤트 생성
    useEffect(() => {
        if (!editor || !onChange) return;

        const handler = () => {
            const html = editor.getHTML();
            setContent(html);

            if (name) {
                // ChangeEvent처럼 생긴 객체를 만들어 호출
                const fakeEvent = {
                    target: { name, value: html } as HTMLTextAreaElement,
                } as React.ChangeEvent<HTMLTextAreaElement>;
                onChange(fakeEvent);
            }
        };

        editor.on('update', handler);
        return () => {
            editor.off('update', handler);
        };
    }, [editor, onChange, name]);

    // 외부 value가 바뀌면 에디터에 반영
    useEffect(() => {
        if (!editor) return;
        if (value !== undefined && value !== editor.getHTML()) {
            editor.commands.setContent(value, false);
            setContent(value);
        }
    }, [value, editor]);

    // EditorContent 영역 클릭 시 에디터 포커스
    const handleEditorClick = () => {
        editor?.chain().focus().run();
    };

    if (readOnly) {
        return (
            <EditorContent
                editor={editor}
                className={cn(
                    'campus_editor',
                    computedClasses,
                    'peer w-full outline-none text-[1.1rem] p-0 font-semibold rounded-md',
                    'bg-primary-black/5 text-primary-black placeholder:text-primary-100/70',
                    'focus:ring-2 focus:ring-primary-100/20 focus:border-primary-100 focus:bg-primary-white focus:text-primary-black',
                )}
                style={style}
            />
        );
    }

    return (
        <div className=' bg-white rounded-lg '>
            <ToolBar editor={editor} handleImageClick={handleImageClick} />
            <EditorContent
                editor={editor}
                placeholder={placeholder}
                className={cn(
                    'campus_editor',
                    computedClasses,
                    'peer w-full border-[1px] border-primary-100 outline-none text-[1.1rem] pt-5 pb-3 font-semibold rounded-md',
                    'bg-primary-black/5 text-primary-black placeholder:text-primary-100/70',
                    'focus:ring-2 focus:ring-primary-100/20 focus:border-primary-100 focus:bg-primary-white focus:text-primary-black',
                )}
                style={style}
                onClick={handleEditorClick}
            />

            {/* 히든 인풋 */}
            <input type='hidden' name={name} value={content} />

            {/* 숨은 파일 input */}
            <input
                ref={inputRef}
                type='file'
                accept='image/*'
                className='hidden'
                onChange={handleFileChange}
            />
        </div>
    );
};

export default Tiptap;
