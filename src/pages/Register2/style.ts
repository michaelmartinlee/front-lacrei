import styled from 'styled-components'

export const MainStyled = styled.main`
  margin: 2.5rem;
  > p {
    margin-top: 3rem;
    margin-bottom: 10px;
  }
  > span {
    margin-bottom: 1rem;
  }
  > form {
    margin-bottom: 3rem;
  }
  > form input[type='file'] {
    display: none;
  }
  > form label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 349px;
    height: 80px;
    border: 1px dashed #000000;
    border-radius: 10px;
  }
  > form label img {
    width: 35px;
    height: 35px;
  }
  > form div {
    margin-top: 1rem;
  }
  > div {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }
`
