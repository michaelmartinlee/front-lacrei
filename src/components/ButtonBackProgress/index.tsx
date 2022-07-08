import { Link } from "react-router-dom";
import { Button } from "../Button";
import { DivButtons } from "./style";

interface IButtonBackProgressProps{
  buttonLeft:string;
  buttonRight:string;
  redirectLeft:string;
  redirectRight:string;
}

export function ButtonBackProgress(props:IButtonBackProgressProps){
  return(
    <DivButtons>
        <Link to={props.redirectLeft}><Button text={props.buttonLeft}/></Link>
        <Link to={props.redirectRight}><Button text={props.buttonRight}/></Link>
    </DivButtons>
  )
}