import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  gap: 2rem;

  img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
  }

  & > div {
    flex: 1;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
