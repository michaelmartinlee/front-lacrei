import styled from "styled-components";

export const MainStyled = styled.main`
    display: flex;
    height: screen;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 100px 150px;
    @media (max-width: 590px){
      margin: 30px 44px;
    }
    >div{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 213px;
    }
    >div>h2{
      font-size:48px;
      line-height: 65px;
      font-weight: 700;
    }
    >div>h3{
      font-size:32px;
      line-height: 43px;
      font-weight: 400;
      @media (max-width: 590px){
      margin: 44px 0;
    }
    }

`
export const DivButtonsStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const ButtonsStyled = styled.button`
      width: 400px;
      height: 52px;
      background-color: #D9D9D9;
      border-radius: 10px;
      border: none;
      font-size: 18px;
      line-height: 22px;
      margin: 10px;
      :hover{
        background-color: darkgray;
        transition: 300ms;
      }
      @media (max-width: 590px){
      width: auto;
    }
`