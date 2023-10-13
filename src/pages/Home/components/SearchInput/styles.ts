import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  margin-bottom: 3rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

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
