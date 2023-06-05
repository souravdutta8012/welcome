import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Identities, Leads, OfficeData, ExploreData, FoodData, ShopData } from "../Constant";

export default function Preload() {
    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        let tmp: any = [];

        Identities?.forEach((i: any) => {
            tmp.push(i?.image);
        });

        Leads?.forEach((i: any) => {
            tmp.push(i?.image);
        });

        tmp.push(OfficeData?.image);

        ExploreData?.pune?.forEach((i: any) => {
            tmp.push(i?.image);
        });
        ExploreData?.bangalore?.forEach((i: any) => {
            tmp.push(i?.image);
        });

        FoodData?.pune?.forEach((i: any) => {
            tmp.push(i?.image);
        });
        FoodData?.bangalore?.forEach((i: any) => {
            tmp.push(i?.image);
        });

        ShopData?.pune?.forEach((i: any) => {
            tmp.push(i?.image);
        });
        ShopData?.bangalore?.forEach((i: any) => {
            tmp.push(i?.image);
        });

        setList(tmp);
    }, []);

    return (
        <>
            <Box>
                {list?.length && list?.map((item: any, i: number) =>
                    <img key={i} src={item} hidden />
                )}
            </Box>
        </>
    )
}