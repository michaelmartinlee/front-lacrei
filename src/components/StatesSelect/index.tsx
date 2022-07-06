import { StatesSelectStyled } from "./style"

const optionsTitle= [
  {title:"Acre"},
  {title:"Alagoas"},
  {title:"Amapá"},
  {title:"Amazonas"},
  {title:"Bahia"},
  {title:"Ceará"},
  {title:"Distrito Federal"},
  {title:"Espírito Santo"},
  {title:"Goías"},
  {title:"Maranhão"},
  {title:"Mato Grosso"},
  {title:"Mato Grosso do Sul"},
  {title:"Minas Gerais"},
  {title:"Pará"},
  {title:"Paraíba"},
  {title:"Paraná"},
  {title:"Pernambuco"},
  {title:"Piauí"},
  {title:"Rio de Janeiro"},
  {title:"Rio Grande do Norte"},
  {title:"Rio Grande do Sul"},
  {title:"Rondônia"},
  {title:"Roraima"},
  {title:"Santa Catarina"},
  {title:"São Paulo"},
  {title:"Sergipe"},
  {title:"Tocantins"},
]

export default function StatesSelect(){
  return(
    <StatesSelectStyled>
    <label htmlFor="">Primeiro gostaríamos de saber em qual estado você trabalha</label>
    <select name="estados">
      <option value="default"></option>
     { optionsTitle.map((element, index) => (
      <option key={element.title+index} value={element.title}>{element.title}</option>
     ))}
    </select>
    </StatesSelectStyled>
  )
}