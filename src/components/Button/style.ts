import styled from 'styled-components'

export const ButtonProgress = styled.button`
  width: 150px;
  height: 52px;
  background-color: #d9d9d9;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  line-height: 22px;
  margin: 10px;
  :hover {
    background-color: darkgray;
    transition: 300ms;
  }
  @media (max-width: 440px) {
    width: 100px;
  }
`
