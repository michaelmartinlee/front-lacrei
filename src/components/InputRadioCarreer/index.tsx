import { DivInputRadio } from "./style"

const buttonsRadio = [
  {title:"Enfermagem"},
  {title:"Nutrição"},
  {title:"Medicina"},
  {title:"Psicologia"},
  {title:"Odontologia"},
  {title:"Fonoaudiologia"},
  {title:"Fisioterapia"},
]

export function InputRadioCarreer(){
  const isRadioSelected = (value:string): boolean => true
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>) => {}

  return(
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
  )
}