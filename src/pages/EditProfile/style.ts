import styled from "styled-components";

export const DivUser = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 50px 0;
        >img{
          width: 100px;
          height: 100px;
          margin: 25px;
          border-radius: 50%;
        }
        >p{
          font-size: 18px;
          font-weight: 400;
        }
`

export const FormStyled = styled.form`
      margin: 140px 60px;

`

export const DivInputs = styled.div`
    display: flex;
    flex-direction:column;
    >label{
      font-size: 18px;
      line-height: 22px;
      margin-top: 45px;
      margin-bottom: 10px;
    }
    >p{
      font-size: 15px;
      line-height: 18.15px;
      margin-bottom: 30px;
    }
    >input{
      height: 52px;
      border-radius: 10px;
      background-color: #D9D9D9;
      border: none;
    }
    >textarea{
      height: 116px;
      border-radius: 10px;
      background-color: #D9D9D9;
      border: none;
      resize: none;
    }
`

export const DivButtons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 100px;
  justify-content: space-between;
`