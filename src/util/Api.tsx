import axios from "axios"

export const getWeather = async (): Promise<any> => {
    let temp = null;
    await axios.get("https://api.openweathermap.org/data/2.5/weather?q=pune&appid=f56f24967aaf51182d1d4df628297c6d")
        .then((res) => {
            temp = (Math.round(res?.data?.main?.temp - 273.15)) + "°C";
        });
    return temp;
};
