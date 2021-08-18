import { Container, Item, Menu } from './style'

import { Link } from 'react-scroll'

export const Header: React.FC = () => {
  return (
    <Container>
      <Menu>
        <Item>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Sobre
          </Link>
        </Item>
        <Item>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Projetos
          </Link>
        </Item>
        <Item>
          <Link
            activeClass="active"
            to="technology"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Tecnologias
          </Link>
        </Item>
        <Item>
          <Link
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Contato
          </Link>
        </Item>
      </Menu>
    </Container>
  )
}
