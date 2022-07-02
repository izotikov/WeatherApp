export interface ConditionWeather {
    code: number;
    icon: string;
    text: string;
}

export interface DataCurrent {
    cloud: number;
    condition: ConditionWeather;
    feelslike_c: number;
    gust_kph: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    precip_mm: number;
    pressure_mb: number;
    temp_c: number;
    uv: number;
    vis_km: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
}

export interface DataLocation {
    country: string;
    lat: number;
    localtime: string;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
}

export interface Data {
    current: DataCurrent;
    location: DataLocation;
}