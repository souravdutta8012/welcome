import { Box } from "@mui/material";
import { getLight } from "../util/Function";
const obj = [14, 15, 16, 17, 18];
export const Calendar = () => {
	const light = getLight();
	return (
		<>
			<Box className={light ? "Backdrop-light" : "Backdrop"}></Box>
			<Box className="Grad1"></Box>
			<Box className="Grad2 overflow-clip"></Box>
			<Box className=" flex justify-center items-center  py-8">
				{obj.map((item: any) => {
					return (
						<Box className="w-20 h-20 border border-solid border-red-50 bg-green flex flex-col justify-center items-center">
							<Box className="text-4xl font-bold text-white">{item}</Box>
							<Box className="text-2xl font-bold text-white">JUN</Box>
						</Box>
					);
				})}
			</Box>
		</>
	);
};
