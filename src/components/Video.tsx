import { useRef, useState } from "react";
import { Card, CardCover } from "@mui/joy";

export default function Video() {
    const vidRef = useRef<any>(null);
    const [play, setPlay] = useState(true);

    const togglePlay = () => {
        if (play) {
            vidRef?.current?.pause();
            setPlay(false);
        } else {
            vidRef?.current?.play();
            setPlay(true);
        }
    };

    return (
        <>
            <Card className="aspect-video mt-2 mb-6 shadow-none">
                <CardCover>
                    <video
                        className="rounded-lg"
                        playsInline
                        loop
                        muted={false}
                        onClick={togglePlay}
                        ref={vidRef}
                        autoPlay={true}
                        poster="/tcs.jpeg">
                        <source
                            src="/woodside.mp4"
                            type="video/mp4" />
                    </video>
                </CardCover>
            </Card>
        </>
    )
}