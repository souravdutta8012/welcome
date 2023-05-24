import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { CalendarTodayOutlined, Diversity1Outlined, MoreOutlined, PermContactCalendarOutlined, PinDropOutlined } from "@mui/icons-material";
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
					<Box className="flex justify-between items-center pt-2 pb-6">
						<Box>
							<Box className={"w-32 h-32 rounded-lg " + (light ? "bg-secondary-light" : "bg-secondary-dark")}>
								<div className="flex w-full h-full justify-center items-center">
									<CalendarTodayOutlined className={"text-4xl " + (light ? "text-primary-dark" : "text-primary-light")} />
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
							<Box className={"w-32 h-32 rounded-lg " + (light ? "bg-secondary-light" : "bg-secondary-dark")}>
								<div className="flex w-full h-full justify-center items-center">
									<CalendarTodayOutlined className={"text-4xl " + (light ? "text-primary-dark" : "text-primary-light")} />
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
					<Box className="flex justify-between items-center pt-2 pb-6">
						<Box>
							<Box className={"w-32 h-32 rounded-lg " + (light ? "bg-secondary-light" : "bg-secondary-dark")}>
								<div className="flex w-full h-full justify-center items-center">
									<PermContactCalendarOutlined className={"text-4xl " + (light ? "text-primary-dark" : "text-primary-light")} />
								</div>
							</Box>
							<Box className="text-center pt-2">
								<Box className={"font-semibold " + (light ? "text-primary-dark" : "text-primary-light")}>
									Contact
								</Box>
								<Box className={"text-sm " + (light ? "text-secondary-purple" : "text-secondary-gray")}>
									View Team Leads
								</Box>
							</Box>
						</Box>
						<Box>
							<Box className={"w-32 h-32 rounded-lg " + (light ? "bg-secondary-light" : "bg-secondary-dark")}>
								<div className="flex w-full h-full justify-center items-center">
									<MoreOutlined className={"rotate-90 text-4xl " + (light ? "text-primary-dark" : "text-primary-light")} />
								</div>
							</Box>
							<Box className="text-center pt-2">
								<Box className={"font-semibold " + (light ? "text-primary-dark" : "text-primary-light")}>
									Pune Places
								</Box>
								<Box className={"text-sm " + (light ? "text-secondary-purple" : "text-secondary-gray")}>
									Places to visit
								</Box>
							</Box>
						</Box>
					</Box>
					<Box className="flex justify-between items-center pt-2 pb-6">
						<Box>
							<Box className={"w-32 h-32 rounded-lg " + (light ? "bg-secondary-light" : "bg-secondary-dark")}>
								<div className="flex w-full h-full justify-center items-center">
									<Diversity1Outlined className={"text-4xl " + (light ? "text-primary-dark" : "text-primary-light")} />
								</div>
							</Box>
							<Box className="text-center pt-2">
								<Box className={"font-semibold " + (light ? "text-primary-dark" : "text-primary-light")}>
									Culture
								</Box>
								<Box className={"text-sm " + (light ? "text-secondary-purple" : "text-secondary-gray")}>
									View Socity
								</Box>
							</Box>
						</Box>
						<Box>
							<Box className={"w-32 h-32 rounded-lg " + (light ? "bg-secondary-light" : "bg-secondary-dark")}>
								<div className="flex w-full h-full justify-center items-center">
									<PinDropOutlined className={"text-4xl " + (light ? "text-primary-dark" : "text-primary-light")} />
								</div>
							</Box>
							<Box className="text-center pt-2">
								<Box className={"font-semibold " + (light ? "text-primary-dark" : "text-primary-light")}>
									Pune Map
								</Box>
								<Box className={"text-sm " + (light ? "text-secondary-purple" : "text-secondary-gray")}>
									View Locations
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}
