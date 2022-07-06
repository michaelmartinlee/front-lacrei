import styled from "styled-components";

export const FormStyled = styled.form`
    margin: 0 85px;
    display: flex;
    flex-direction: column;
`
export const DivInputRadio = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    line-height: 22px;
   >label:first-child{
      margin-top: 22px;
      margin-bottom: 40px;
   }
   >label>input{
    margin-right: 15px;
    margin-top: 23px;
   }
    
`

export const DivButtons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: space-between;
`