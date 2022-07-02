import React, {FC} from 'react';
import {Data} from "../../interfaces/requestData/RequestData";
//@ts-ignore
import classes from './CityWeather.module.css';

interface CityWeatherInt {
    weather: Data | undefined;
}

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const CityWeather: FC<CityWeatherInt> = ({weather,
}) => {

    const weatherInfo = weather?.current;
    const weatherLocation = weather?.location;

    return (

        <div className={classes.infoBlock}>
            {weatherInfo !== undefined &&
            <div className={classes.mainBody}>
                <div className={classes.tempr}>
                    {weatherInfo?.temp_c}°
                </div>
                <div className={classes.cityAndDate}>
                    <div className={classes.city}>
                        {weatherLocation?.name}
                    </div>
                    <div className={classes.date}>
                        {weatherLocation?.localtime}
                    </div>
                </div>
                <div className={classes.condition}>
                    <div className={classes.conditionIcon}>
                        <img src={weatherInfo?.condition.icon}/>
                    </div>
                    <div className={classes.conditionText}>
                        {weatherInfo?.condition.text}
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default CityWeather;