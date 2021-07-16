import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 80px);
  background: var(--dark-secondary);
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  padding-bottom: 40px;
  font-style: italic;
`

export const ProjectArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: auto;
  justify-content: space-evenly;
  row-gap: 60px;
`
