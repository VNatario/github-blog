import styled, { css } from 'styled-components'

interface ExternalLinkProps {
  $variant?: 'iconLeft'
}

export const ExternalLinkContainer = styled.a<ExternalLinkProps>`
  text-decoration: none;
  border: none;
  background: none;
  color: ${({ theme }) => theme.blue};
  font-size: 0.75rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  transition: 400ms;
  border-bottom: 1px solid transparent;
  height: 1.1875rem;
  line-height: 0px;
  cursor: pointer;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.blue};
  }

  ${(props) =>
    props.$variant === 'iconLeft' &&
    css`
      flex-direction: row-reverse;
    `}
`
