import { useEffect, useState } from 'react'
import { TbTemperatureCelsius, BsWind, GiWindsock } from 'react-icons/all';

import { WeatherRepository } from '../../../../repositories/WeatherRepository'

import { WeatherInfoDTO } from '../../../../DTO/WeatherInfoDTO'

import { Loading } from '../../../../components/Loading'
import { Icon } from '../../../../components/Icon';

import { CityInformationContainer, CityLabel, StateLabel, WeatherCard, WeatherContainer, WeatherDegree, WeatherDescription, WeatherInformationContainer, WeatherWindDirection, WeatherWindSpeed } from './styles'

interface WeatherInfoProp {
    city: string,
    state: string
}

export function WeatherInfo(props: WeatherInfoProp) {
    const _weatherService = new WeatherRepository()
    const [weather, setWeather] = useState<WeatherInfoDTO>()
    const [loading, setLoading] = useState<boolean>(true)

    const loadWeatherInfo = async () => {
        const result = await _weatherService.getWeatherOfTown(props.city)
        setWeather(result)
    }

    useEffect(() => {
        loadWeatherInfo()
        setLoading(false)
    }, [])

    return (
        <WeatherContainer>
            <CityInformationContainer>
                <CityLabel>
                    {props.city}
                </CityLabel>
                -
                <StateLabel>
                    {props.state}
                </StateLabel>
            </CityInformationContainer>
            <WeatherInformationContainer>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <WeatherCard>

                            <WeatherDescription>{weather?.description}</WeatherDescription>
                            <WeatherDegree>
                                <span>{weather?.temperature}</span>
                                <Icon height='1rem' width='1rem' style={{ margin: 0, paddingRight: '0.5rem' }} icon={<TbTemperatureCelsius />} />
                            </WeatherDegree>

                            <WeatherWindDirection>
                                <span style={{ display: 'flex' }}>
                                    <Icon height='1rem' width='1rem' style={{ margin: 0, marginRight: '0.5rem' }} icon={<BsWind />} />
                                    <span>{weather?.wind_direction}</span>
                                </span>
                            </WeatherWindDirection>
                            <WeatherWindSpeed>
                                <span style={{ display: 'flex' }}>
                                    <Icon height='1rem' width='1rem' style={{ margin: 0, marginRight: '0.5rem' }} icon={<GiWindsock />} />
                                    <span>{weather?.wind_speedy}</span>
                                </span>
                            </WeatherWindSpeed>
                        </WeatherCard>
                    </>
                )}
            </WeatherInformationContainer>
        </WeatherContainer>
    )
}