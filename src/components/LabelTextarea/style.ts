import styled from 'styled-components'

export const DivLabelTextarea = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    font-size: 18px;
    line-height: 22px;
    margin-top: 45px;
    margin-bottom: 10px;
  }
  > p {
    font-size: 15px;
    line-height: 18.15px;
    margin-bottom: 30px;
  }
  > input {
    height: 52px;
    border-radius: 10px;
    background-color: #d9d9d9;
    border: none;
  }
  > textarea {
    height: 116px;
    border-radius: 10px;
    background-color: white;
    border: none;
    resize: none;
  }
`
