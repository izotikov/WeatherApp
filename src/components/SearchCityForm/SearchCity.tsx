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
    setAlreadySearched: (val:string[]) => void;
    alreadySearched: string[];
}

const SearchCity: FC<searchCityInt> = ({
                                           value,
                                           onChange,
                                           setWeatherInfo,
                                           setValue,
                                           setAlreadySearched,
                                           alreadySearched
}) => {

    async function searching() {
        const requestResult = await getArray(value);
        setValue("");
        setWeatherInfo(requestResult);
        if (requestResult) {
            setAlreadySearched([...alreadySearched, requestResult.location.name])
        }
        if (alreadySearched.length >= 3 && requestResult) {
            let alreadySearchedTemp = alreadySearched.filter((p, i) => i !== 0);
            setAlreadySearched([...alreadySearchedTemp, requestResult.location.name])
        }
    }


    async function searchClicked(e: React.MouseEvent) {
        e.preventDefault();
        searching();

    }

    async function enterClickedSearch() {
        searching();
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }

    const keyPressed = (buttn: React.KeyboardEvent<HTMLInputElement>) => {
        // eslint-disable-next-line eqeqeq
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