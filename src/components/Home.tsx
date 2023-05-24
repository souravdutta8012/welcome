import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useUserState } from "../util/User";
import { getLight } from "../util/Function";
import NameCard from "./NameCard";
import Video from "./Video";

export default function Home() {
	const [height, setHeight] = useState(window.innerHeight - 312);

	const { auth } = useUserState();
	const light = getLight();

	useEffect(() => {
		const handleWindowResize = () => setHeight(window.innerHeight - 312);
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	return (
		<>
			<Box className={light ? "Backdrop-light" : "Backdrop"}></Box>
			<Box className="Grad1"></Box>
			<Box className="Grad2 overflow-clip"></Box>
			<Box className="px-6">
				<NameCard auth={auth} />
				<Video />
				<Box className="overflow-y-auto" sx={{ maxHeight: height }}>
					<Box className="flex justify-between items-center pb-4">
						<Box className="-rotate-90">
							<Box className="text-center">
								Itinerary
							</Box>
							<Box className={"w-32 h-32 rounded-lg " + (light ? "bg-secondary-light" : "bg-secondary-dark")}>
								<div>

								</div>
							</Box>
						</Box>
						<Box className="">
							<Box className={"w-32 h-32 rounded-lg " + (light ? "bg-secondary-light" : "bg-secondary-dark")}>
								<div >

								</div>
							</Box>
						</Box>
					</Box>
					<Box className="flex justify-between items-center pb-4">
						<Box className="-rotate-90">
							<Box className="text-center">
								Profile Connect
							</Box>
							<Box className={"w-32 h-32 rounded-lg " + (light ? "bg-secondary-light" : "bg-secondary-dark")}>
								<div>

								</div>
							</Box>
						</Box>
						<Box className="">
							<Box className={"w-32 h-32 rounded-lg " + (light ? "bg-secondary-light" : "bg-secondary-dark")}>
								<div >

								</div>
							</Box>
						</Box>
					</Box>
					<Box className="flex justify-between items-center pb-4">
						<Box className="-rotate-90">
							<Box className="text-center">
								About Pune
							</Box>
							<Box className={"w-32 h-32 rounded-lg " + (light ? "bg-secondary-light" : "bg-secondary-dark")}>
								<div>

								</div>
							</Box>
						</Box>
						<Box className="">
							<Box className={"w-32 h-32 rounded-lg " + (light ? "bg-secondary-light" : "bg-secondary-dark")}>
								<div >

								</div>
							</Box>
						</Box>
					</Box>
					<Box className="flex justify-between items-center pb-4">
						<Box className="-rotate-90">
							<Box className="text-center">
								About Pune
							</Box>
							<Box className={"w-32 h-32 rounded-lg " + (light ? "bg-secondary-light" : "bg-secondary-dark")}>
								<div>

								</div>
							</Box>
						</Box>
						<Box className="">
							<Box className={"w-32 h-32 rounded-lg " + (light ? "bg-secondary-light" : "bg-secondary-dark")}>
								<div >

								</div>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}
