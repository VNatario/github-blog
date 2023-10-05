import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
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

    body, input {
        font-family: 'Nunito', sans-serif;
        line-height: 1.6;
    }


  
`
