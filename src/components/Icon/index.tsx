import React,{ ReactNode } from "react";

import {IconContainer} from './styles'

interface IconProps {
    icon: ReactNode,
    width?: string,
    height?: string,
    style?: React.CSSProperties
}

export function Icon(props:IconProps) {
    return (
        <IconContainer style={{
            ...props.style,
            width:props.width ?? '1rem',
            height:props.height ?? '1rem',
        }}>
            {props.icon}
        </IconContainer>
    )
}