import styled from 'styled-components'

export const Container = styled.div`
  background: var(--dark-primary);
  width: 300px;
  height: 400px;
  border-radius: 5px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  position: relative;

  height: calc(100% - 200px);
`

export const Title = styled.p`
  font-size: 20px;
  color: var(--secondary);
  font-weight: 900;
`

export const Description = styled.span`
  text-align: center;
  margin-top: 10px;
  max-height: 80px;

  overflow: hidden;
`

export const Button = styled.button`
  width: 100%;
  background: var(--secondary);
  height: 40px;

  color: var(--text-primary);
  font-size: 16px;
  font-weight: 600;

  border-radius: 4px;

  position: absolute;
  bottom: 20px;

  transition: background 0.4s, border 0.4s, color 0.4s;

  border: 1px solid transparent;

  &:hover {
    background: transparent;
    border: 1px solid var(--secondary);
    color: var(--secondary);
  }
`

export const Image = styled.img`
  object-fit: cover;
  width: 300px;
  height: 200px;
`
