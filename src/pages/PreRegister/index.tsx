import { StatesSelect } from '../../components/Selects'
import H2 from '../../components/H2'
import { Button } from '../../components/Button'
import { MainStyled } from '../../pages/PreRegister/style'
import Arrow from '../../components/Arrow'
export default function PreRegister() {
  return (
    <MainStyled>
      <H2 text="Boas-vindas, profissional! Faça seu pré-cadastro" />
      <Arrow />
      <p>
        No Lacrei Saúde profissionais de enfermagem, nutrição, medicina,
        psicologia, odontologia, fonoaudiologia e fisioterapia podem se conectar
        a comunidade LGBTQIA+.
      </p>
      <StatesSelect />
      <Button text="Continuar" />
    </MainStyled>
  )
}
