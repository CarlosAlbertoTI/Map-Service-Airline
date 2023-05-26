import { GiAirplaneDeparture, GiAirplaneArrival, TiWeatherPartlySunny } from 'react-icons/all';

import { FlySteps } from './components/FlySteps'
import { StepIcon } from './components/FlySteps/components/StepIcon';
import { MapOfFly } from './components/MapOfFly/index';
import { WeatherInfo } from './components/WeatherInfo';
import { Icon } from '../../components/Icon';

import { IStep } from '../../interfaces/ISteps'

import { FlyDescription, FlyInfoAndMapContainer, FlyInformation, MainPageContainer, FlyInfoAndWeatherInformation } from './style'

import { DateInDateFormat, DateInHourFormat, addTime } from '../../libs/time';

const departTime = `${DateInHourFormat(new Date)} - ${DateInDateFormat(new Date)}`
const arrivedTime = `${DateInHourFormat(addTime(new Date, { hours: 2 }))} - ${DateInDateFormat(new Date)}`


const flySteps:{
    steps:IStep[],
    coordinatesSteps: [number,number][]
} = {
    steps:[
        {
            title: "Aeroporto de Congonhas",
            description: "São Paulo",
            moreinfo: "SP",
            status: "process",
            subTitle: departTime,
            icon: <StepIcon icon={<GiAirplaneDeparture />} />,
            coords: {
                lng: -46.6553,
                lat: -23.626
            }
        },
        {
            title: "Aeroporto Santos Dumont",
            description: "Rio de Janeiro",
            moreinfo: "RJ",
            status: "wait",
            subTitle: arrivedTime,
            icon: <StepIcon icon={<GiAirplaneArrival />} />,
            coords: {
                lng: -43.1631,
                lat: -22.9103
            }
        }
    ],
    coordinatesSteps: [
        [-46.656636, -23.626485],
        [-46.648412, -23.638011],
        [-43.162923, -22.927048],
        [43.163588, -22.910169]
    ]
}
export function MainPage() {

    return (
        <MainPageContainer>
            <FlyInfoAndMapContainer>
                <FlyInfoAndWeatherInformation>
                    <FlyInformation>
                        <FlyDescription>Here it's the description of your flight</FlyDescription>
                        <FlySteps flightSteps={flySteps.steps} current={0} />
                    </FlyInformation>
                    <FlyInformation>
                        <FlyDescription>
                            <Icon style={{
                                height: '2rem',
                                lineHeight: '1rem',
                                marginTop: 0,
                                marginRight: '1rem'
                            }} icon={<TiWeatherPartlySunny />} /> The Weather
                        </FlyDescription>
                        {flySteps.steps.length > 0 && flySteps.steps.map((step) => {
                            return <WeatherInfo key={step.title} city={step.description} state={step.moreinfo ?? ""} />
                        })}
                    </FlyInformation>
                </FlyInfoAndWeatherInformation>
                <MapOfFly centerPoint={flySteps.steps[0].coords} points={flySteps.coordinatesSteps} />
            </FlyInfoAndMapContainer>
        </MainPageContainer>
    )
}