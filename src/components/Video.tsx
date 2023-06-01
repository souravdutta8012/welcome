import { useEffect, useRef, useState } from "react";
import { useUserState } from "../util/User";

export default function Video() {
    const vidRef = useRef<any>(null);
    const [play, setPlay] = useState<any>('unknown');

    const { auth } = useUserState();

    useEffect(() => {
        localStorage.getItem('video') === 'pause' ? setPlay('pause') : setPlay('unknown');
    }, []);

    const togglePlay = () => {
        if (play === 'play') {
            vidRef?.current?.pause();
            setPlay('pause');
            localStorage.setItem('video', 'pause');
        } else if (play === 'pause') {
            vidRef?.current?.play();
            setPlay('play');
            localStorage.setItem('video', 'play');
        } else {
            vidRef?.current?.play();
            setPlay('play');
            localStorage.setItem('video', 'play');
        }
    };

    return (
        <>
            <video
                className="aspect-video mt-2 mb-6 drop-shadow-xl rounded-lg object-contain w-full"
                playsInline
                muted={false}
                onClick={togglePlay}
                ref={vidRef}
                autoPlay={(play === 'play' || play === 'unknown')}
                loop
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