import logo from "../../assets/images/logo.png";
import { Imagem, Wrapper } from "./styles";

export const Header = () => {
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
