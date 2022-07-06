import { ButtonBackProgress } from "../../components/ButtonBackProgress";
import { InputRadioCarreer } from "../../components/InputRadioCarreer";
import { LabelInput } from "../../components/LabelInput";
import { DivStyled } from "./style";

export function PreRegisterOther(){
  return(
    <DivStyled>
      <p>Colocar um texto curto explicando sobre a lista de espera.</p>
      <LabelInput title="E-mail profissional"/>
      <InputRadioCarreer />
      <ButtonBackProgress 
      buttonLeft="Voltar"
      buttonRight="Enviar"
      redirectLeft="/"
      redirectRight="/"
      />
    </DivStyled>
  )
}