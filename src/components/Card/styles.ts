import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  border: 2px solid ${(props) => props.theme['base-post']};
  transition: 400ms;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    h3 {
      width: 17.6875rem;
      height: 4rem;
    }
  }
`
