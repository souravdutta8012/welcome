import axios from "axios"

export const getWeather = async (lat: any, lon: any): Promise<any> => {
    let temp = null;
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f56f24967aaf51182d1d4df628297c6d`)
        .then((res) => {
            temp = (Math.round(res?.data?.main?.temp - 273.15)) + "°C";
        });
    return temp;
};

// https://geolocation-db.com/json/
export const getCity = async (lat: any, lon: any): Promise<any> => {
    let city = null;
    await axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=f56f24967aaf51182d1d4df628297c6d`)
        .then((res) => {
            city = res?.data[0]?.name;
        });
    return city;
};
