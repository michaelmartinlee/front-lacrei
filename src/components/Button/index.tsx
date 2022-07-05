import { ButtonProgress } from "./style"

interface IButtonProps{
  text:string
}


export function Button(props:IButtonProps){
  return(
    <ButtonProgress>{props.text}</ButtonProgress>
  )
}