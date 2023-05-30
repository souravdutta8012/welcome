import { useEffect, useRef, useState } from "react";
import { useUserState } from "../util/User";
import { Card, CardCover } from "@mui/joy";

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
            <Card className="aspect-video mt-2 mb-6 shadow-none">
                <CardCover>
                    <video
                        className="rounded-lg object-contain"
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
                </CardCover>
            </Card>
        </>
    )
}