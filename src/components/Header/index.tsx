import { Container, Item, Menu } from './style'

export const Header: React.FC = () => {
  return (
    <Container>
      <Menu>
        <Item>
          <a href="#">Sobre mim</a>
        </Item>
        <Item>
          <a href="#">Projetos</a>
        </Item>
        <Item>
          <a href="#">Principais tecnologias</a>
        </Item>
        <Item>
          <a href="#">Contato</a>
        </Item>
      </Menu>
    </Container>
  )
}
