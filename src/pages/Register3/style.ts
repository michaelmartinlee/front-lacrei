import styled from 'styled-components'

export const MainStyled = styled.main`
  margin: 2.5rem;
  > div p {
    font-size: 18px;
    line-height: 22px;
    margin-top: 45px;
    margin-bottom: 10px;
  }
  > div span {
    display: block;
    margin-bottom: 2rem;
  }
  > div input[type='file'] {
    display: none;
  }
  > div form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  > button {
    margin-left: 1.5rem;
  }
`
