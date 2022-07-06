import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { LabelInput } from "../../components/LabelInput";
import { LabelTextarea } from "../../components/LabelTextarea";
import { DivButtons, DivUser, FormStyled } from "./style";

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
        <LabelInput title="Nome"/>
        <LabelInput title="Nome de usuário"/>
          {textareaFields.map((element, index)=> (
            <LabelTextarea 
            key={element.title+index}
            title={element.title} 
            subtitle={element.subtitle} />     
          ))}
          <DivButtons>
              <Link to={"/perfil"}><Button text="Cancelar"/></Link>
              <Button text="Salvar"/>
          </DivButtons>
      </FormStyled>
    </main>
  )
}