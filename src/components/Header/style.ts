import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 100px;

  height: 80px;
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`

export const Item = styled.li`
  a {
    text-decoration: none;
    color: var(--text-primary);
    font-size: 26px;

    display: flex;
    flex-direction: column;

    transition: width 0.2s;

    &::after {
      content: '';
      transition: width 0.2s;
      margin: auto;
      width: 0px;
      height: 2.5px;
      background: var(--secondary);
      border-radius: 2px;
    }

    &:hover :after {
      background: var(--secondary);
      width: 100%;
    }
  }

  margin: 0 30px;
`
