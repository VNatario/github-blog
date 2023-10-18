import { createGlobalStyle } from 'styled-components'
import firaCode from '../assets/fonts/FiraCode-Regular.woff'

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'FiraCode';
        src: url(${firaCode}) format('wolff');
        font-weight: 400;
        font-style: normal;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme['base-background']};
        color: ${({ theme }) => theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, a {
        font-family: 'Nunito', sans-serif;
        line-height: 1.6;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
    }

  
`
