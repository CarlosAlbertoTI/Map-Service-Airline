import { WeatherInfoDTO } from '../DTO/WeatherInfoDTO';
export default interface IWeatherRepository {
  getWeatherOfTown(
    city: string
  ): Promise<WeatherInfoDTO>;
}
