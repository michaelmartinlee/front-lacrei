import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { LabelInput } from "../../components/LabelInput";
import { LabelTextarea } from "../../components/LabelTextarea";
import { DivButtons, DivInputRadio, FormStyled } from "./style";

  const buttonsRadio = [
    {title:"Enfermagem"},
    {title:"Nutrição"},
    {title:"Medicina"},
    {title:"Psicologia"},
    {title:"Odontologia"},
    {title:"Fonoaudiologia"},
    {title:"Fisioterapia"},
  ]

export function ProfessionalData() {
   const isRadioSelected = (value:string): boolean => true
   const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>) => {}
   
  return (
    <main>
      <FormStyled action="">
        <LabelInput title="RQE (Registro de Qualificação de Especialista)"/>
        <LabelInput title="Especialização"/>
        <DivInputRadio>
          <label htmlFor="Profissão">Profissão</label>
            {buttonsRadio.map((element,index) => (
              <label htmlFor={element.title} key={element.title+index}>
                <input 
                  type="radio"
                  name="radio-btn" 
                  value={element.title}
                  checked={isRadioSelected(element.title)}
                  onChange={handleRadioClick}
                  />{element.title}
                </label>
            ))}
        </DivInputRadio>
        <LabelInput title="Público Alvo"/>
        <LabelTextarea title="Tratamento de doenças"/>
        <DivButtons>
          <Link to={"/perfil"}><Button text="Cancelar"/></Link>
          <Button text="Salvar"/>
        </DivButtons>
      </FormStyled>
    </main>
  )
}