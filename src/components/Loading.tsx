import React from 'react'
import { Loading as NcLoading } from 'nc-simple-loading'
import styled from 'styled-components'

const Loading = React.memo(() => (
  <LoadingContainer>
    <NcLoading />
  </LoadingContainer>
))

export { Loading }

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999999999;
  background: white;
  display: flex;
  align-items: center;
  justify-contents: space-between;
`
