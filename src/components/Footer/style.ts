import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 250px;
`

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 24px 0;
`

export const Header = styled.div`
  width: 100%;
  height: 70px;
  background: var(--secondary);

  padding: 0 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 22px;
    font-weight: 500;
  }

  div {
    width: 74px;

    display: flex;
    justify-content: space-between;

    a {
      color: var(--text-primary);
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-5px);
      }
    }
  }
`

export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;

  margin-bottom: 16px;

  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    width: 60%;
    margin-top: 2px;
    height: 2.5px;
    background: var(--secondary);
    border-radius: 2px;
  }
`

export const Content = styled.div`
  height: 100%;
  background: var(--dark-secondary);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
`

export const Projects = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-size: 18px;

    &:hover {
      filter: brightness(1.1);
    }
  }
`

export const Technologies = styled(Layout)`
  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 16px;
    column-gap: 34px;

    margin-top: 8px;

    p {
      font-size: 18px;
      font-weight: 600;
    }
  }
`

export const Contact = styled(Layout)`
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 6px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 5px;

    font-size: 18px;
    font-weight: 500;
  }
`
