import { DivLabelTextarea } from "./style";

interface ILabelTextarea{
  title:string;
  subtitle?:string;
}

export function LabelTextarea(props:ILabelTextarea){
  return(
    <DivLabelTextarea>
        <label htmlFor={props.title}>{props.title}</label>
        <p >{props.subtitle}</p>
        <textarea  required minLength={280} maxLength={500} />
    </DivLabelTextarea>
  )
}