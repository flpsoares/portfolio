import { Container, Item, Menu } from './style'

export const Header: React.FC = () => {
  return (
    <Container>
      <Menu>
        <Item>
          <a href="#">Sobre</a>
        </Item>
        <Item>
          <a href="#">Projetos</a>
        </Item>
        <Item>
          <a href="#">Tecnologias</a>
        </Item>
      </Menu>
    </Container>
  )
}
