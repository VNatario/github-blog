import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  min-height: 10.5rem;
  padding: 2rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  margin-top: calc((10.5rem - 5rem) * -1);
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  header {
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
  }
`

export const InfoList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  li {
    color: ${(props) => props.theme['base-span']};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    line-height: 0px;

    svg {
      color: ${(props) => props.theme['base-label']};
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`
