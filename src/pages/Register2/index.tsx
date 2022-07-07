import H2 from '../../components/H2'
import { LabelTextarea } from '../../components/LabelTextarea'
import { LinkFoward } from '../../components/LinkFoward'
import { MainStyled } from './style'
import LabelSVG from '../../assets/images/Vector.svg'
export default function Register2() {
  return (
    <MainStyled>
      {/* componente de progresso */}
      <H2 text="Dados pessoais" />
      <p>Insira a sua foto de perfil</p>
      <span>
        São aceitos os formatos jpg e png.<br></br> Tamanho máximo de 5MB
      </span>
      <form action="post" encType="multipart/form-data">
        <div>
          <label htmlFor="imagem">
            <img src={LabelSVG} />
          </label>
          <input id="imagem" type="file" accept=".jpg, .png" />
          <span id="file-name"></span>
        </div>
      </form>
      <LabelTextarea
        title="Faça a descrição da sua foto"
        subtitle="Ex: mulher branca com cabelo cacheado escuro. Usa camisa rosa e sorri para a foto"
      />
      <LabelTextarea
        title="Escreva uma apresentação"
        subtitle="Mínimo de 280 caracteres"
      />
      <div>
        <LinkFoward destiny="/cadastro/3" text="Continuar"></LinkFoward>
      </div>
    </MainStyled>
  )
}
