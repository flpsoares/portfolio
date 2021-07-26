import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 80px);
  background: var(--dark-primary);
  padding: 40px;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(2, auto);
  row-gap: 100px;
  column-gap: 145px;
`
