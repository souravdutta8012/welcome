import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CommonDialog from "./CommonDialog";
import NameCard from "./NameCard";
import Video from "./Video";
import { useUserState } from "../util/User";
import { getLight } from "../util/Function";

export default function Home() {
	const [open, setopen] = useState(false);
	const [value, setvalue] = useState(undefined);
	const [height, setHeight] = useState(window.innerHeight - 350);

	const { auth } = useUserState();
	const light = getLight();

	useEffect(() => {
		const handleWindowResize = () => setHeight(window.innerHeight - 350);
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	const openDialog = (value: any) => {
		setopen(true);
		setvalue(value);
	};

	return (
		<>
			<Box className={light ? "Backdrop-light" : "Backdrop"}></Box>
			<Box className="Grad1"></Box>
			<Box className="Grad2 overflow-clip"></Box>
			<Box className="px-6">
				<NameCard auth={auth} />
				<Video />
				<Box className="overflow-y-auto" sx={{ maxHeight: height }}>
					<Box>
						<Box className={"text-center font-semibold text-lg tracking-widest pb-2 " + (light ? "text-secondary-gray" : "text-secondary-gray")}>
							Itinerary
						</Box>
						<Box className="flex justify-around items-center pt-2 pb-8">
							<Box>
								<Box className={"w-32 h-32 rounded-lg bg-gradient-to-bl " + (light ? "from-secondary-blue to-primary-blue" : "from-primary-pink to-primary-blue")}>
									<div className="flex w-full h-full justify-center items-center" onClick={() => openDialog('day1')}>
										<img src="/calendar.svg" className={"" + (light ? "text-primary-light" : "text-primary-light")} />
									</div>
								</Box>
								<Box className="text-center pt-2">
									<Box className={"font-semibold " + (light ? "text-primary-dark" : "text-primary-light")}>
										Day 1
									</Box>
									<Box className={"text-sm " + (light ? "text-secondary-purple" : "text-secondary-gray")}>
										View Program
									</Box>
								</Box>
							</Box>
							<Box>
								<Box className={"w-32 h-32 rounded-lg bg-gradient-to-bl " + (light ? "from-secondary-blue to-primary-blue" : "from-primary-pink to-primary-blue")}>
									<div className="flex w-full h-full justify-center items-center" onClick={() => openDialog('day2')}>
										<img src="/calendar.svg" className={"" + (light ? "text-primary-light" : "text-primary-light")} />
									</div>
								</Box>
								<Box className="text-center pt-2">
									<Box className={"font-semibold " + (light ? "text-primary-dark" : "text-primary-light")}>
										Day 2
									</Box>
									<Box className={"text-sm " + (light ? "text-secondary-purple" : "text-secondary-gray")}>
										View Program
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box>
						<Box className={"text-center font-semibold text-lg tracking-widest pb-2 " + (light ? "text-secondary-gray" : "text-secondary-gray")}>
							Profile Connect
						</Box>
						<Box className="flex justify-around items-center pt-2 pb-8">
							<Box>
								<Box className={"w-32 h-32 rounded-lg bg-gradient-to-bl " + (light ? "from-secondary-blue to-primary-blue" : "from-primary-pink to-primary-blue")}>
									<div className="flex w-full h-full justify-center items-center" onClick={() => openDialog('contact')}>
										<img src="/contact.svg" className={"" + (light ? "text-primary-light" : "text-primary-light")} />
									</div>
								</Box>
								<Box className="text-center pt-2">
									<Box className={"font-semibold " + (light ? "text-primary-dark" : "text-primary-light")}>
										Contact
									</Box>
									<Box className={"text-sm " + (light ? "text-secondary-purple" : "text-secondary-gray")}>
										TCS Leadership
									</Box>
								</Box>
							</Box>
							<Box>
								<Box className={"w-32 h-32 rounded-lg bg-gradient-to-bl " + (light ? "from-secondary-blue to-primary-blue" : "from-primary-pink to-primary-blue")}>
									<div className="flex w-full h-full justify-center items-center" onClick={() => openDialog('office')}>
										<img src="/office.svg" className={"" + (light ? "text-primary-light" : "text-primary-light")} />
									</div>
								</Box>
								<Box className="text-center pt-2">
									<Box className={"font-semibold " + (light ? "text-primary-dark" : "text-primary-light")}>
										Pune Office
									</Box>
									<Box className={"text-sm " + (light ? "text-secondary-purple" : "text-secondary-gray")}>
										TCS Pune Office
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<CommonDialog open={open} setopen={setopen} data={value} />
		</>
	);
}
