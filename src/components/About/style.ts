import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 80px);
  background: var(--dark-primary);
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Box = styled.div`
  padding: 0 400px;
  text-align: center;
`

export const Content = styled.p`
  font-size: 26px;
  font-weight: 500;
  margin-top: 40px;
`
