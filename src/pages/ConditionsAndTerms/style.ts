import styled from 'styled-components'

export const MainStyled = styled.main`
  margin: 2.5rem;
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h2 {
    margin-bottom: 2rem;
  }
  > p {
    height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-bottom: 2rem;
    max-width: 350px;
  }
`
