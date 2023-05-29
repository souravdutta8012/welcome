import axios from "axios"

export const getWeather = async (lat: any, lon: any): Promise<any> => {
    let temp = null;
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f56f24967aaf51182d1d4df628297c6d`)
        .then((res) => {
            temp = (Math.round(res?.data?.main?.temp - 273.15)) + "°C";
        });
    return temp;
};

export const getCity = async (): Promise<any> => {
    let city = null;
    await axios.get(`https://geolocation-db.com/json/`)
        .then((res) => {
            city = res?.data?.city;
        });
    return city;
};
