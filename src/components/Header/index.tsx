import logo from "./../../public/images/logo.png";
import { Imagem, Wrapper } from "./styles";

const Header = () => {
  const routes = [{ label: "quem somos", path: "/quem-somos" }];
  return (
    <Wrapper>
      <div>
        <Imagem src={logo} alt="logo" />
      </div>
      <div>
        <span>quem somos</span>
      </div>
    </Wrapper>
  );
};
export default Header;
