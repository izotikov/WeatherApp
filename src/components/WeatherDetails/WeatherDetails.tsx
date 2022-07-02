import React, {FC} from 'react';
//@ts-ignore
import classes from "./WeatherDetails.module.css";
import {Data} from "../../interfaces/requestData/RequestData";

interface WeatherDetailsInt {
    weatherInfo: Data;
}

const WeatherDetails: FC<WeatherDetailsInt> = ({weatherInfo}) => {
    return (
        <div className={classes.mainFolder}>
            <div style={{fontSize: 16}}>Подробная информация</div>
            <div className={classes.elemOfWeather}>
                <span>Облачность</span>
                <span>{weatherInfo.current.cloud}%</span>
            </div>
            <div className={classes.elemOfWeather}>
                <span>Влажность</span>
                <span>{weatherInfo.current.wind_kph}%</span>
            </div>
            <div className={classes.elemOfWeather}>
                <span>Скорость ветра</span>
                <span>{weatherInfo.current.wind_kph} км/ч</span>
            </div>
            <div className={classes.elemOfWeather}>
                <span>Направление ветра</span>
                <span>{weatherInfo.current.wind_dir}</span>
            </div>
            <div className={classes.elemOfWeather}>
                <span>Направление ветра (в градусах)</span>
                <span>{weatherInfo.current.wind_degree}°</span>
            </div>
            <div className={classes.elemOfWeather}>
                <span>Ультрафиолетовый индекс</span>
                <span>{weatherInfo.current.uv}</span>
            </div>
            <div className={classes.elemOfWeather}>
                <span>Видимость</span>
                <span>{weatherInfo.current.vis_km} км</span>
            </div>
            <div className={classes.elemOfWeather}>
                <span>Порывы ветра</span>
                <span>{weatherInfo.current.gust_kph} км/ч</span>
            </div>
            <div className={classes.elemOfWeather}>
                <span>Осадки</span>
                <span>{weatherInfo.current.precip_mm} мм</span>
            </div>
            <div className={classes.elemOfWeather}>
                <span>Давление</span>
                <span>{weatherInfo.current.pressure_mb} мбар</span>
            </div>
            <div className={classes.actual}>
                <span>Актуально на {weatherInfo.current.last_updated} по местному</span>
            </div>
        </div>
    );
};

export default WeatherDetails;