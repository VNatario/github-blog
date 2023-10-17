import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  height: 10.5rem;
  margin-top: calc((10.5rem - 5rem) * -1);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;

    /* adicionando reticências (...) caso o titulo passe de 1 linha*/
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`

export const InfoList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;

  li {
    color: ${(props) => props.theme['base-span']};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`
