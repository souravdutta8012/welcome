import { Card, CardCover } from "@mui/joy";

export default function Video() {
    return (
        <>
            <Card className="aspect-video mt-2 mb-6 shadow-none">
                <CardCover>
                    <video
                        autoPlay
                        loop
                        muted
                        poster="https://assets.codepen.io/6093409/river.jpg">
                        <source
                            src="https://assets.codepen.io/6093409/river.mp4"
                            type="video/mp4" />
                    </video>
                </CardCover>
            </Card>
        </>
    )
}