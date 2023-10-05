import styled, { css } from 'styled-components'
import cover from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: ${() => css`url(${cover}) no-repeat center`};
  background-size: cover;
`
