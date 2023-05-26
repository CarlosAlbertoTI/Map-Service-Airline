import { Steps, StepProps } from "antd";
import { IStep } from "../../../../interfaces/ISteps";

interface FlyStepsProps extends StepProps {
    flightSteps: IStep[]
    current:number
}


export function FlySteps(props:FlyStepsProps) {
    return (
        <Steps
            direction="vertical"
            current={props.current}
            items={props.flightSteps}
        />
    )
}