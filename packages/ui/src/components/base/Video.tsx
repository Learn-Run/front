// import { cn } from '../../lib/utils.js';

function Video({
    className,
    sourceSrc,
    blendType,
}: {
    className?: string;
    sourceSrc: string;
    blendType?:
        | 'screen'
        | 'multiply'
        | 'overlay'
        | 'darken'
        | 'lighten'
        | 'color-dodge'
        | 'color-burn'
        | 'hard-light'
        | 'soft-light'
        | 'difference'
        | 'exclusion'
        | 'hue'
        | 'saturation'
        | 'color'
        | 'luminosity';
}) {
    return (
        <video
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            className={`pointer-events-none ${className}`}
            style={{
                objectPosition: 'center',
                mixBlendMode: blendType || 'normal',
            }}
        >
            <source src={sourceSrc} type='video/mp4' />
        </video>
    );
}

export default Video;
