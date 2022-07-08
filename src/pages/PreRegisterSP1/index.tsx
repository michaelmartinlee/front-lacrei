import { LabelInput } from '../../components/LabelInput'
import { MainStyled } from '../PreRegisterSP1/style'
import { ButtonBackProgress } from '../../components/ButtonBackProgress'
import { InputRadioCarreer } from '../../components/InputRadioCarreer'

export default function PreRegisterSP1() {
  return (
    <MainStyled>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum
        ea sint similique facere atque obcaecati nobis deserunt, beatae
        inventore.
      </p>
      <LabelInput title="Nome Completo" />
      <LabelInput title="Email" inputType="email" />
      <InputRadioCarreer />
      <LabelInput title="Prefixo do Conselho Profissional" />
      <LabelInput title="Número do conselho regional" />
      <ButtonBackProgress
        buttonLeft="voltar"
        buttonRight="continuar"
        redirectLeft="/pre-cadastro"
        redirectRight="/pre-cadastro/sp2"
      />
    </MainStyled>
  )
}
