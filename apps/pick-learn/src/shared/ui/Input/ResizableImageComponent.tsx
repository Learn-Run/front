import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { NodeViewWrapper, NodeViewProps } from '@tiptap/react';

export const ResizableImageComponent = ({
    node,
    updateAttributes,
}: NodeViewProps) => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = container.current;
        if (!el) return;

        // 리사이즈가 시작됐는지 확인할 플래그
        let isResizing = false;

        const onPointerDown = (e: PointerEvent) => {
            // 컨테이너 안에서만 리사이즈 시작
            if (el.contains(e.target as Node)) {
                isResizing = true;
            }
        };

        const onPointerUp = () => {
            if (!isResizing) return;
            isResizing = false;
            // 최종 크기 반영
            const width = el.clientWidth;
            const height = el.clientHeight;
            updateAttributes({ width, height });
        };

        // 컨테이너 안에서 눌린 순간부터
        el.addEventListener('pointerdown', onPointerDown);
        // 전역에서 버튼 뗄 때까지 기다렸다가
        document.addEventListener('pointerup', onPointerUp);

        return () => {
            el.removeEventListener('pointerdown', onPointerDown);
            document.removeEventListener('pointerup', onPointerUp);
        };
    }, [updateAttributes]);

    return (
        <NodeViewWrapper
            as='div'
            contentEditable={false}
            ref={container}
            style={{
                display: 'inline-block',
                resize: 'both',
                overflow: 'hidden',
                width: node.attrs.width ? `${node.attrs.width}px` : 'auto',
                height: node.attrs.height ? `${node.attrs.height}px` : 'auto',
                border: '1px solid #ddd',
            }}
        >
            <Image
                src={node.attrs.src}
                alt={node.attrs.alt || 'Image'}
                width={node.attrs.width ?? 0}
                height={node.attrs.height ?? 0}
                unoptimized
                draggable={false}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'fill',
                    pointerEvents: 'none',
                    display: 'block',
                }}
            />
        </NodeViewWrapper>
    );
};
