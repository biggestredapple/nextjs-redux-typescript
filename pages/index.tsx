import styled, { createGlobalStyle, GlobalStyleComponent, StyledComponent, ThemeProvider } from 'styled-components'
import TodoDetails from '../components/TodoDetail'
import reset from 'styled-reset'

export default () => {
    const GlobalStyle: GlobalStyleComponent<{}, {}> = createGlobalStyle`
        ${reset}
        body, html {
            font-size: 1.1em;
            margin: 30px 0;
            background-color: #282828;
        }
    `

    const theme: any = {
        fontFamily: "'Raleway', sans-serif",
        color: "#cfcfcf",
    }

    const Wrapper: StyledComponent<'div', {}> = styled.div`
        width: 80%;
        padding: 32px 0;
        margin: 0 auto;
        color: ${props => props.theme.color};
        border-bottom: 1px solid #afafbc;
        margin-bottom: 50px;
        font-size: 1.9em;
        font-family: ${props => props.theme.fontFamily};
    `

    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Wrapper>
                    <p>Todo App</p>
                </Wrapper>
                <TodoDetails />
            </ThemeProvider>
        </>
    )
}