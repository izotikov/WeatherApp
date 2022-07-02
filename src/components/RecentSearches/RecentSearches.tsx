import React, {FC} from 'react';
//@ts-ignore
import classes from './RecentSearches.module.css';
import {getArray} from "../../hooks/getArray";
import {Data} from "../../interfaces/requestData/RequestData";

export interface SearchedInt {
    alreadySearched: string[];
    setWeatherInfo: (val:Data | undefined) => void;
}

const RecentSearches: FC<SearchedInt> = ({alreadySearched, setWeatherInfo}) => {

    async function searching(e: any) {
        let value = e.target.textContent;
        const requestResult = await getArray(value);
        setWeatherInfo(requestResult);
    }
    let i:number = 0; //just key for React.map
    return (
        <div className={classes.listOfSearched}>
            {alreadySearched.length !== 0 &&
                alreadySearched.map(
                    (elem:string) =>
                        <div
                            className={classes.elemOfList}
                            onClick={searching}
                            key={i++}>{elem}</div>)
            }
        </div>
    );
};

export default RecentSearches;