import axios from "axios"

export const getWeather = async (): Promise<any> => {
    let temp = null;
    await axios.get("https://api.open-meteo.com/v1/forecast?latitude=18.52&longitude=73.86&hourly=temperature_2m&forecast_days=1")
        .then((res) => {
            temp = res?.data?.hourly?.temperature_2m?.pop() + "°C";
        });
    return temp;
};
