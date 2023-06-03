import { useEffect, useRef, useState } from "react";
import { useUserState } from "../util/User";

export default function Video() {
    const vidRef = useRef<any>(null);
    const [state, setState] = useState<any>('unknown');

    const { auth } = useUserState();

    useEffect(() => {
        localStorage.getItem('video') === 'pause' ? setState('pause') : setState('unknown');
    }, []);

    const togglePlay = () => {
        if (state === 'play') {
            vidRef?.current?.pause();
            setState('pause');
            localStorage.setItem('video', 'pause');
        } else if (state === 'pause') {
            vidRef?.current?.play();
            setState('play');
            localStorage.setItem('video', 'play');
        } else {
            vidRef?.current?.play();
            setState('play');
            localStorage.setItem('video', 'play');
        }
    };

    const pause = () => {
        setState('pause');
        localStorage.setItem('video', 'pause');
    };

    const play = () => {
        setState('play');
        localStorage.setItem('video', 'play');
    };

    return (
        <>
            <video
                className="aspect-video mt-2 mb-6 drop-shadow-xl rounded-lg object-contain w-full"
                playsInline
                muted={false}
                onClick={togglePlay}
                onPause={pause}
                onPlay={play}
                ref={vidRef}
                autoPlay={(state === 'play' || state === 'unknown')}
                loop
                controls
                controlsList="nofullscreen nodownload noplaybackrate"
                disablePictureInPicture
                poster="/video.png">
                {auth?.video ? (
                    <source
                        src={auth?.video}
                        type="video/mp4" />
                ) : null}
            </video>
        </>
    )
}