import { ButtonsStyled, DivButtonsStyled, MainStyled } from "./style";

export function Register(){
  return(
    <MainStyled>
      <div>
        <h2>Vamos começar?</h2>
        <h3>Selecione o perfil <br />que mais se adequa a você!</h3>
      </div>
      <DivButtonsStyled>
        <ButtonsStyled>Profissional da saúde</ButtonsStyled>
        <ButtonsStyled>Pessoa em busca de atendimento</ButtonsStyled>
      </DivButtonsStyled>
    </MainStyled>
  )
}
