import { Container, Box, Content } from './style'

import { Title } from '../Title'

export const About: React.FC = () => {
  return (
    <Container>
      <Title>Sobre</Title>
      <Box>
        <Content>
          Bem-vindo(a) ao meu portfólio, aqui você vai encontrar alguns dos meus
          principais projetos desenvolvidos como como programador full stack, e
          também as principais tecnologias que tenho experiência.
        </Content>
        <Content>
          Meu nome é Filipe, sou formado em Técnico em Informática na Universidade
          Candido Mendes (UCAM), onde peguei a base para me tornar autodidata. Foi
          nessa mesma faculdade que consegui um estágio na área para melhorar meu
          aprenzidado (03/19 - 09/19).
        </Content>
      </Box>
    </Container>
  )
}
