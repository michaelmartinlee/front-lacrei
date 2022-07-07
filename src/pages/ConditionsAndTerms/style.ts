import styled from 'styled-components'

export const MainStyled = styled.main`
  margin: 3rem;
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h2 {
    margin-bottom: 2rem;
  }
  > p {
    height: 400px;
    overflow: scroll;
    margin-bottom: 2rem;
  }
`
