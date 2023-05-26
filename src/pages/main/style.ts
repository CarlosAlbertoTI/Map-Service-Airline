import styled from 'styled-components'

export const MainPageContainer = styled.main`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content:center ;
`   

export const FlyInfoAndMapContainer = styled.div`
    margin-top:5rem ;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap:wrap ;
    align-items:flex-start ;
    gap:2rem;
`

export const FlyInfoAndWeatherInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content:center ;
    row-gap: 2rem;

`

export const FlyInformation = styled.section`
    display: flex;
    min-width: 350px;
    min-height:2rem;

    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;

    background-color: ${(props) => props.theme['white']};
    border-radius:0.2rem;
    font-weight:bold;
`

export const FlyDescription = styled.p`
    font-size:1.1rem;
    display: block;
    padding-bottom:1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

