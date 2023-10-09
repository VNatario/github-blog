import styled from 'styled-components'

export const HomeContainer = styled.div`
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
