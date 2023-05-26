import { LoadingContent, LoadingText, LoadingTextContainer } from './styles'

export function Loading() {
    return (
        <LoadingContent>
            <LoadingTextContainer>
                <LoadingText>
                    Carregando...
                </LoadingText>
            </LoadingTextContainer>
        </LoadingContent>
    )
}