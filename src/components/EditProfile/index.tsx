import { Button } from "../Button";
import { DivButtons, DivInputs, DivUser, FormStyled } from "./style";

const textareaFields = [
  {title:"Descrição da sua foto*", subtitle:"Ex: mulher branca com cabelo cacheado escuro. Usa camisa rosa e sorri para a foto"},
  {title:"Sua apresentação*", subtitle:"Mínimo de 280 caracteres"},
  {title:"Por que deseja atuar no atendimento da comunidade LGBTQIAPN+?*", subtitle:""},
]

export function EditProfile() {

  return (
    <main>
      <DivUser>
        <img src="https://picsum.photos/200/300" alt="" />
        <p>Trocar foto perfil</p>
      </DivUser>
      <FormStyled action="">
        <DivInputs>
          <label htmlFor="Nome">Nome</label>
          <input type="text" id="nome" />
        </DivInputs>
        <DivInputs>
          <label htmlFor="Nome">Nome de usuário</label>
          <input type="text"/>
        </DivInputs>
          {textareaFields.map((element, index)=> (
            <DivInputs key={element.title+index}>
              <label htmlFor={element.title}>{element.title}</label>
              <p >{element.subtitle}</p>
              <textarea  required minLength={280} maxLength={500} id={element.title} />
            </DivInputs>
          ))}
          <DivButtons>
              <Button text="Cancelar"/>
              <Button text="Salvar"/>
          </DivButtons>
      </FormStyled>
        
    </main>
  )
}