import styled from 'styled-components'

export const InputStyled = styled.input`
  width: 100%;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
  transition: 300ms;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    outline: 0;
    box-shadow: none;
    border-color: ${(props) => props.theme.blue};
  }
`
