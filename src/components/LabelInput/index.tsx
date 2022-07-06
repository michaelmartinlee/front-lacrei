import { DivLabelInput } from "./style";

interface  ILabelInput {
    title:string
}

export function LabelInput(props: ILabelInput){
  return(
    <DivLabelInput>
        <label htmlFor={props.title}>{props.title}</label>
        <input type="text" />
    </DivLabelInput>
  )
}