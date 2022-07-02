import React, {FC} from 'react';
import {getArray} from "../../hooks/getArray";
import {Data} from "../../interfaces/requestData/RequestData";
// @ts-ignore
import search from '../../img/iconmonstr-search-thin.svg';
// @ts-ignore
import classes from './SearchCity.module.css';

interface searchCityInt {
    value: string;
    onChange: (val: string) => void;
    setWeatherInfo: (val:Data | undefined) => void;
    setValue: (val: string) => void;
}

const SearchCity: FC<searchCityInt> = ({ value, onChange, setWeatherInfo, setValue}) => {

    async function searchClicked(e: React.MouseEvent) {
        e.preventDefault();
        const temp = await getArray(value);
        setValue("");
        setWeatherInfo(temp);
    }

    async function enterClickedSearch() {
        const temp = await  getArray(value);
        setValue("");
        setWeatherInfo(temp);
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }

    const keyPressed = (buttn: React.KeyboardEvent<HTMLInputElement>) => {
        if (buttn.code == "Enter") {
            enterClickedSearch();
        }
    }


    return (
        <div>
            <div className={classes.searchBox}>
                <input type='text' value={value}
                       onChange={handleNameChange}
                       placeholder={"Введите город"}
                       className={classes.inputSearch}
                       onKeyDown={keyPressed}
                />
                <div className={classes.searchImg} onClick={searchClicked}>
                    <img src={search} alt="logo"/>
                </div>
            </div>
        </div>
    );
};

export default SearchCity;