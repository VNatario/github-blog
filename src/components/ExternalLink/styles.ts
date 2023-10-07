import styled from 'styled-components'

export const ExternalLinkContainer = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 1.1875rem;

  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
  border-bottom: 1px solid transparent;
  transition: 500ms;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.blue};
  }
`
