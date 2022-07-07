import { StatesSelectStyled } from './style'

const statesOptionsTitle = [
  { title: 'Acre' },
  { title: 'Alagoas' },
  { title: 'Amapá' },
  { title: 'Amazonas' },
  { title: 'Bahia' },
  { title: 'Ceará' },
  { title: 'Distrito Federal' },
  { title: 'Espírito Santo' },
  { title: 'Goías' },
  { title: 'Maranhão' },
  { title: 'Mato Grosso' },
  { title: 'Mato Grosso do Sul' },
  { title: 'Minas Gerais' },
  { title: 'Pará' },
  { title: 'Paraíba' },
  { title: 'Paraná' },
  { title: 'Pernambuco' },
  { title: 'Piauí' },
  { title: 'Rio de Janeiro' },
  { title: 'Rio Grande do Norte' },
  { title: 'Rio Grande do Sul' },
  { title: 'Rondônia' },
  { title: 'Roraima' },
  { title: 'Santa Catarina' },
  { title: 'São Paulo' },
  { title: 'Sergipe' },
  { title: 'Tocantins' }
]
const specialtyOptionsTitle = [
  { title: 'Enfermagem' },
  { title: 'Nutrição' },
  { title: 'Medicina' },
  { title: 'Psicologia' },
  { title: 'Odontologia' },
  { title: 'Fonoaudiologia' },
  { title: 'Fisioterapia' }
]
export function StatesSelect() {
  return (
    <StatesSelectStyled>
      <label htmlFor="">Em qual Estado você trabalha?</label>
      <select name="estados">
        <option value="default"></option>
        {statesOptionsTitle.map((element, index) => (
          <option key={element.title + index} value={element.title}>
            {element.title}
          </option>
        ))}
      </select>
    </StatesSelectStyled>
  )
}
export function SpecialtySelect() {
  return (
    <StatesSelectStyled>
      <label htmlFor="especialidadeClinica">Especialidade clínica</label>
      <select name="especialidade clinica" id="especialidadeClinica">
        <option value="default"></option>
        {specialtyOptionsTitle.map((element, index) => (
          <option key={element.title + index} value={element.title}>
            {element.title}
          </option>
        ))}
      </select>
    </StatesSelectStyled>
  )
}
