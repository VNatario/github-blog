import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  min-height: 13.25rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-top: -5.5rem;
  margin-bottom: 4.5rem;

  a {
    position: absolute;
    top: 2.5rem;
    right: 2rem;
  }
`

export const ProfileImage = styled.img`
  height: 9.25rem;
  width: 9.25rem;
  border-radius: 8px;
`

export const ProfileDetails = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }
`

export const ProfileInfoList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1.5rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
