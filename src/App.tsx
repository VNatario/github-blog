import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Github-Blog</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}
