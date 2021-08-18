import { Container, Box } from './style'
import { Title } from '../Title'

import { Technology } from '../Technology'

export const Technologies: React.FC = () => {
  return (
    <Container id="technology">
      <Title>Tecnologias</Title>
      <Box>
        <Technology
          title="CSS, HTML, JS"
          url="/assets/logos/html-css-js.png"
          alt="html-css-js"
        />
        <Technology
          title="Typescript"
          url="/assets/logos/typescript.png"
          alt="typescript"
        />
        <Technology title="ReactJS" url="/assets/logos/react.png" alt="reactjs" />
        <Technology title="NextJS" url="/assets/logos/next.jpg" alt="nextjs" />
        <Technology title="AdonisJS" url="/assets/logos/adonis.jpg" alt="adonis" />
        <Technology title="NodeJS" url="/assets/logos/node.jpg" alt="nodejs" />
        <Technology
          title="PostgreSQL"
          url="/assets/logos/postgres.jpg"
          alt="postgres"
        />
        <Technology title="MySQL" url="/assets/logos/mysql.jpg" alt="mysql" />
      </Box>
    </Container>
  )
}
