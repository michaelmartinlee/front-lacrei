import { DivButtons, DivUser, LinkEdit, LinkEditProfile } from "./style";

const buttonsRedirect = [
  {tile:"Dados Profissionais", redirect: "/perfil/dados-profissionais"},
  {tile:"Identidade", redirect: "/"},
  {tile:"Consultório", redirect: "/"},
  {tile:"Serviços", redirect: "/"},
  {tile:"Configurações da Conta", redirect: "/"},
  {tile:"Sair", redirect: "/"},
]

export function Profile() {
  return (
    <main>
      <DivUser>
        <img src="https://picsum.photos/200/300" alt="" />
        <p>@Nome Usuario</p>
        <LinkEditProfile to={"/perfil/editar"}>editar perfil</LinkEditProfile>
      </DivUser>
      <DivButtons>
        {buttonsRedirect.map((element,index)=>(
          <LinkEdit
          key={element.tile+index} 
          to={element.redirect}
          >
            {element.tile}
          </LinkEdit>
        ))}
      </DivButtons>
    </main>
  )
}
