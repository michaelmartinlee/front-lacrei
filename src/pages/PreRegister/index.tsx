import StatesSelect from "../../components/StatesSelect"
import { MainStyled } from "../../pages/PreRegister/style"
import { Button } from "../../components/Button"

export default function PreRegister(){
  return(
  <MainStyled>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque id vero aliquam tenetur commodi veniam omnis impedit atque beatae quasi?
    </p>
    <StatesSelect />
    <Button text="Continuar"/>
  </MainStyled>
  )
}