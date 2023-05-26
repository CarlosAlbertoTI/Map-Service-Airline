import { HeaderContainer, HeaderInfoContainer, HeaderTitle, HeaderSubtitle } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderInfoContainer>
                <HeaderTitle>Welcome to Map Service Airline</HeaderTitle>
                <HeaderSubtitle>A place to see the world</HeaderSubtitle>
            </HeaderInfoContainer>
        </HeaderContainer>
    )
}