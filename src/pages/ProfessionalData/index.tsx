import { ButtonBackProgress } from "../../components/ButtonBackProgress";
import { InputRadioCarreer } from "../../components/InputRadioCarreer";
import { LabelInput } from "../../components/LabelInput";
import { LabelTextarea } from "../../components/LabelTextarea";
import { FormStyled } from "./style";


export function ProfessionalData() {
   
  return (
    <main>
      <FormStyled action="">
        <LabelInput title="RQE (Registro de Qualificação de Especialista)"/>
        <LabelInput title="Especialização"/>
        <InputRadioCarreer />
        <LabelInput title="Público Alvo"/>
        <LabelTextarea title="Tratamento de doenças"/>
        <ButtonBackProgress 
        buttonLeft="Cancelar"
        buttonRight="Salvar"
        redirectLeft="/"
        redirectRight="/"
        />
      </FormStyled>
    </main>
  )
}