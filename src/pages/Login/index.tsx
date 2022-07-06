import { Button } from "../../components/Button";
import { DivRegisterStyled, DivStyled, FormStyled, H2Styled, LinkStyled } from "./style";

export function Login(){
  return(
    <main>
      <H2Styled>Colocar texto de boas vindas</H2Styled>
      <DivStyled>
        <FormStyled action="">
          <label htmlFor="E-mail">E-mail</label>
          <input type="text" />
          <label htmlFor="E-mail">Senha</label>
          <input type="text" />
          <Button text="Entrar"/>
        </FormStyled>
        <DivRegisterStyled>
          <p>Ainda não tem conta?</p>
          <LinkStyled to={"/cadastrar"}>Criar Cadastro</LinkStyled>
        </DivRegisterStyled>
      </DivStyled>
    </main>
  )
}