import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globals'
import {defaultTheme } from './styles/themes/default'

import { DefaultLayout } from './Layout/defaultLayout'

import { MainPage } from './pages/main/main'


export default function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            <DefaultLayout>
                <MainPage/>
            </DefaultLayout>
        </ThemeProvider>
    )
}