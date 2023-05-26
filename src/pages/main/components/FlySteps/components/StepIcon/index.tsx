import { ReactNode } from 'react'
import {StepIconContainer}  from './styles'

interface StepIconProp {
    icon:ReactNode
}

export function StepIcon(props:StepIconProp){
    return (
        <StepIconContainer>
            {props.icon}
        </StepIconContainer>
    )
}