import { DivLabelInput } from "./style";

interface  ILabelInput {
    title:string
    inputType?:string
}

export function LabelInput(props: ILabelInput){
  return(
    <DivLabelInput>
        <label htmlFor={props.title}>{props.title}</label>
        <input type={props.inputType} />
    </DivLabelInput>
  )
}