import H2 from '../../components/H2'
import { LabelInput } from '../../components/LabelInput'
import { MainsStyled } from './style'
export default function Register4() {
  return (
    <MainsStyled>
      <H2 text="Consultório" />
      <LabelInput title="Tipo de atendimento" />
      <LabelInput title="Telefone" />
      <p>Endereço</p>
      {/* componente rua e numero */}
      <LabelInput title="Bairro" />
      <LabelInput title="Cidade" />
      <LabelInput title="Acessibilidade da clínica" />
    </MainsStyled>
  )
}
