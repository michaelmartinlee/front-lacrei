import { LabelInput } from "../../components/LabelInput"
import { MainStyled, DivStyled } from "./style"
import { ButtonBackProgress } from "../../components/ButtonBackProgress"

export default function PreRegisterSP2 (){
  return(
    <MainStyled>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam nobis dolor esse nulla numquam cum asperiores velit, libero necessitatibus ea.</p>
      <LabelInput title="Senha"/>
      <ul>
        <li>Senha com mais de 8 caracteres</li>
        <li>Senha contém caracteres especiais</li>
        <li>Senha contém números</li>
        <li>Senha contém letras maiúsculas</li>
      </ul>
      <LabelInput title="Confirmação da senha" />
      <DivStyled>
      <input type="checkbox" id="termos" />
      <label htmlFor="termos">Li e concordo com os Termos de Uso
      e Política de Privacidade.</label>
      </DivStyled>
      <ButtonBackProgress buttonLeft="Voltar" buttonRight="Enviar" redirectLeft="/pre-cadastro/sp1" redirectRight="/pre-cadastro/outros-estados-2" />
    </MainStyled>
  )
}