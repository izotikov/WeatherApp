import axios from "axios";
import {Data} from "../interfaces/requestData/RequestData";

let API_KEY = '2147701462634eeb913163438222506';



export async function getArray(city:string) {
    try {
        const response = await axios.get<Data>
        (`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no&lang=ru`);
        console.log(response.data)
        return response.data;
    } catch (e: any) {
        console.log(e);
    }
}