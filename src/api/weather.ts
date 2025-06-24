import { API_CONFIG } from "./config";
import type { Coordinates, ForecastData, GeocodingResponse, WeatherData } from "./types";

class WeatherAPI {
    private createUrl(endpoint: string, params: Record<string, string | number>){
        const searchParams = new URLSearchParams({
            appid : API_CONFIG.API_KEY,
            ...params,
        })
        // return `${endpoint}?${searchParams.toString()}`;
        const fullUrl = `${endpoint}?${searchParams.toString()}`;
        console.log("📡 API Request URL:", fullUrl); 
        return fullUrl;
    }
    
    private async fetchData<T>(url:string): Promise<T> {
        // const response = await fetch(url);
        // console.log(response)
        // if(!response.ok){
        //     throw new Error(`Weather API Error : ${response.statusText}`)
        // }

        // return response.json();
        console.log("🚀 Fetching data from:", url);
        const response = await fetch(url);
        console.log("🔄 Raw Response:", response);

        if (!response.ok) {
            console.error("❌ API Error:", response.statusText);
            throw new Error(`Weather API Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("📦 Parsed JSON Data:", data); // ✅ Logs parsed JSON data
        return data;
    }
    
    async getCurrentWeather({lat, lon}: Coordinates): Promise<WeatherData>{
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`,{
            lat: lat.toString(),
            lon: lon.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.units,
        })
        return this.fetchData<WeatherData>(url);
    }
    
    async getForecast({lat, lon}: Coordinates): Promise<ForecastData>{
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/forecast`,{
            lat: lat.toString(),
            lon: lon.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.units,
        })
        return this.fetchData<ForecastData>(url);
    }
    async reverseGeocode({lat, lon}: Coordinates): Promise<GeocodingResponse>{
        const url = this.createUrl(`${API_CONFIG.GEO}/reverse`,{
            lat: lat.toString(),
            lon: lon.toString(),
            limit: 1,
        })
        return this.fetchData<GeocodingResponse>(url);
    }
}

export const weatherAPI = new WeatherAPI();
