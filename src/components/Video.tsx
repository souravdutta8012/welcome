import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { BigPlayButton, ControlBar, PlayToggle, Player } from 'video-react';
import 'video-react/dist/video-react.css';
import { useUserState } from "../util/User";

export default function Video() {
    const [state, setState] = useState<any>('unknown');

    const { auth } = useUserState();

    useEffect(() => {
        localStorage.getItem('video') === 'pause' ? setState('pause') : setState('play');
        localStorage.setItem('video', 'pause');
    }, []);

    return (
        <>
            <Box className="mt-2 mb-6 drop-shadow-xl">
                <Player
                    autoPlay={(state === 'play')}
                    muted={false}
                    preload="auto"
                    playsInline
                    poster="/video.png"
                    aspectRatio="16:9"
                >
                    <ControlBar disableDefaultControls={true} className="bg-transparent text-sm">
                        <PlayToggle />
                    </ControlBar>
                    <BigPlayButton position="center" className="bg-transparent text-white border-0" />
                    {auth?.video ? (
                        <source
                            src={auth?.video}
                            type="video/mp4" />
                    ) : null}
                </Player>
            </Box>
        </>
    )
}