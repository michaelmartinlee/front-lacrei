import { Link } from "react-router-dom";
import styled from "styled-components";


export const H2Styled = styled.h2`
    margin: 50px 200px;
    @media (max-width: 590px){
      margin: 50px 44px;
    }
`

export const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 200px;
    @media (max-width: 590px){
      margin: 0 44px;
    }
    >label{
      font-size: 16px;
      line-height: 24px;
      color: #6A6A6A;
      margin-top: 30px;
    }
    >input{
      height: 50px;
      border-radius: 8px;
      border: solid 1px;
      border-color: #6A6A6A;
    }
    >Button{
      margin: 50px auto;
    }
    
`

export const DivRegisterStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 28px 240px;
    font-size: 18px;
    line-height: 21px;
    text-decoration: none;
    >p{
      padding: 0 5px;
    }
    @media (max-width: 590px){
      margin: 0 44px;
    }
`
export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: black;
`