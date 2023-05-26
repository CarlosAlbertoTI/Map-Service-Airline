import {ReactNode} from 'react'

import { Header } from '../components/Header'

import {MainContainer}  from './styles'

interface DefaultLayoutProps {
    children: ReactNode
}

export function DefaultLayout({children}:DefaultLayoutProps) {
    return (
        <MainContainer>
            <Header/>
            {children}
        </MainContainer>
    )
    
}