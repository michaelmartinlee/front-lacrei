import H2 from '../../components/H2'
import { LabelInput } from '../../components/LabelInput'
import { LabelTextarea } from '../../components/LabelTextarea'
import { SpecialtySelect } from '../../components/Selects'
import { ButtonBackProgress } from '../../components/ButtonBackProgress'
import CameraSVG from '../../assets/images/Camera.svg'
import { MainStyled } from './style'
export default function Register3() {
  return (
    <MainStyled>
      <H2 text="Dados profissionais" />
      <LabelInput title="Profissão" />
      <LabelInput title="Número de inscrição do conselho" />
      <SpecialtySelect />
      <div>
        <p>Confirmação de identidade</p>
        <span>
          Por questão de segurança, precisamos confirmar a sua identidade. Tire
          uma foto na qual apareça seu rosto e sua carteira profissional{' '}
        </span>
        <form action="post" encType="multipart/form-data">
          <label id="confirmacao" htmlFor="imagemConfirmacao">
            <img src={CameraSVG} />
          </label>
          <input id="imagemConfirmacao" type="file" accept=".jpg, .png" />
        </form>
      </div>
      <LabelTextarea subtitle="Por que deseja atuar no atendimento da comunidade LGBTQIAPN+?" />
      <ButtonBackProgress
        buttonLeft="Voltar"
        buttonRight="Continuar"
        redirectLeft="/cadastro/2"
        redirectRight="/cadastro/4"
      />
    </MainStyled>
  )
}
