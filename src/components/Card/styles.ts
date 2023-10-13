import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 16.25rem;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  border: 2px solid ${(props) => props.theme['base-post']};
  transition: 400ms;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h3 {
      flex: 1;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};

      //maximo de 2 linhas e adiciona reticencias (...)
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      width: max-content;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
