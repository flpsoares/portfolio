import {
  Container,
  Contact,
  Content,
  Projects,
  Header,
  Title,
  Technologies
} from './style'

import { AiFillGithub, AiFillLinkedin, AiOutlinePhone } from 'react-icons/ai'

import { HiOutlineMail } from 'react-icons/hi'

import { Link } from 'react-scroll'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Header>
        <span>Redes sociais</span>
        <div>
          <a target="_blank" href="https://github.com/flpsoares" rel="noreferrer">
            <AiFillGithub size={32} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/filipe-soares-1b7019193/"
            rel="noreferrer"
          >
            <AiFillLinkedin size={32} />
          </a>
        </div>
      </Header>
      <Content>
        <Projects>
          <Title>Projetos</Title>
          <ul>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
          </ul>
        </Projects>
        <Technologies>
          <Title>Tecnologias</Title>
          <div>
            <p>CSS, HTML, JS</p>
            <p>Typescript</p>
            <p>ReactJS</p>
            <p>NextJS</p>
            <p>AdonisJS</p>
            <p>NodeJS</p>
            <p>PostgreSQL</p>
            <p>MySQL</p>
          </div>
        </Technologies>
        <Contact>
          <Title>Contato</Title>
          <div className="wrapper">
            <div className="contact-item">
              <HiOutlineMail size={24} />
              filipeseventeen1@gmail.com
            </div>
            <div className="contact-item">
              <AiOutlinePhone size={24} />
              (22) 9 99778-3931
            </div>
          </div>
        </Contact>
      </Content>
    </Container>
  )
}
