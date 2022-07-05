import { Link } from "react-router-dom";
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
export const LinkEditProfile = styled(Link)`
      font-size: 18px;
      font-weight: 400;
      color: black;
      text-decoration: none;
      margin: 15px;
      padding: 15px 40px;
      background-color: #D9D9D9;
      border-radius: 10px;

`

export const DivButtons = styled.div`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;

`
export const LinkEdit = styled(Link)`
      display: flex;
      justify-content: center;
      font-size: 18px;
      font-weight: 400;
      color: black;
      text-decoration: none;
      padding: 15px 0;
      margin: 23px 40px;
      width: 415px;
      background-color: #D9D9D9;
      border-radius: 10px;
      `