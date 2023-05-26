import { styled } from "styled-components";

export const WeatherContainer = styled.section`
    height:3rem;
    width:100%;
    margin: 0.5rem 0 ;
`
export const CityInformationContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem; 
`

export const CityLabel = styled.h4`
line-height: 1rem;
`

export const StateLabel = styled.h5`
line-height: 1.1rem;
`

export const WeatherInformationContainer = styled.div`
    min-height:500px;
    padding-top:0.5rem;
`
export const WeatherCard = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between ;
`

export const WeatherDescription = styled.h5`
    margin-left:1rem;
    line-height:1.5rem;
    
`

export const WeatherDegree = styled.h3`
    width:3rem;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
`

export const WeatherWind = styled.div``

export const WeatherWindDirection = styled.h3``
export const WeatherWindSpeed = styled.h3``

export const WeatherCloud = styled.h3``

