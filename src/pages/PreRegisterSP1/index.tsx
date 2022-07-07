import { LabelInput } from "../../components/LabelInput"
import { MainStyled } from "../PreRegisterSP1/style"


export default function PreRegisterSP1(){
  return(
    <MainStyled>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum ea sint similique facere atque obcaecati nobis deserunt, beatae inventore.</p>
    <LabelInput title="Nome Completo" />
    <LabelInput title="Email"/>
    {/* //componente de checkbox e colocar tipo de input */}
    <LabelInput title="Prefixo do Conselho Profissional"/>
    <LabelInput title="Número do conselho regional"/>
    {/* //componente de botões duplos */}
    </MainStyled>
  )
}