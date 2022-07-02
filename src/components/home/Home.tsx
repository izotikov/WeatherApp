import React, {FC, useState} from 'react';
import CityWeather from "../CityWeather/CityWeather";
import {Data} from "../../interfaces/requestData/RequestData";
import SearchCity from "../SearchCityForm/SearchCity";
//@ts-ignore
import classes from "./Home.module.css";
import MyModal from "../UI/ModalWindow/MyModal";

const Home: FC = () => {

    const [value, setValue] = useState<string>("");
    const [weatherInfo, setWeatherInfo] = useState<Data>();
    const [visible, setVisible] = useState<boolean>(true); //Модальное окно видно всегда, не закрывается

    const onChange = (val: string) => {
        setValue(val);
    }

    return (
        <div className={classes.mainRoot}>
            <CityWeather weather={weatherInfo}/>
            <MyModal visible={visible}>
                <SearchCity
                    value={value}
                    onChange={onChange}
                    setWeatherInfo={setWeatherInfo}
                    setValue={setValue}
                />
            </MyModal>
        </div>
    );
};

export default Home;