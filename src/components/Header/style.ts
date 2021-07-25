import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);

  background: var(--dark-primary);
  width: 100%;
  padding: 0 100px;

  height: 80px;

  z-index: 10;
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

    transition: width 0.5s;

    &::after {
      content: '';
      transition: width 0.5s;
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
