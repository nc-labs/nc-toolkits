import styled from 'styled-components'

const Main = styled.main`
  min-height: ${({
    headerHeight = 0,
    footerHeight = 0,
  }: {
    headerHeight?: number
    footerHeight?: number
  }) => `calc(100vh - ${headerHeight + footerHeight}px)`};
`

export { Main }
