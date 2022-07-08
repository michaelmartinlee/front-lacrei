import { Link } from 'react-router-dom'
import { Button } from '../Button'
import { LinkStyled } from './style'

interface LinkFowardProps {
  destiny: string
  text: string
}
export function LinkFoward(props: LinkFowardProps) {
  return (
    <LinkStyled>
      <Link to={props.destiny}>
        <Button text={props.text} />
      </Link>
    </LinkStyled>
  )
}
