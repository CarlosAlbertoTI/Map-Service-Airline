import IWeatherRepository from "../../interfaces/IWeatherRepository";
import { AxiosHttpService } from "../../service/http/http.service";

export class WeatherRepository implements IWeatherRepository {
  _httpService = new AxiosHttpService(
    "http://api.weatherapi.com/v1/current.json"
  );

  async getWeatherOfTown(city: string) {
    const data = await this._httpService.get({
      url: "",
      headers: {
        params: {
          key: import.meta.env.VITE_WEATHER_TOKEN,
          q: city,
          aqi: "no",
        },
      },
    });


    const description = data.current.condition.text;
    const {
      wind_kph: wind_speedy,
      wind_dir: wind_direction,
      precip_mm,
      humidity,
      cloud: cloudiness,
      feelslike_c: temperature,
    } = data.current;

    return {
      description,
      wind_speedy,
      wind_direction,
      precip_mm,
      humidity,
      cloudiness,
      temperature,
    };
  }
}
