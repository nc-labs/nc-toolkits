import React, { FC, Fragment, memo } from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import { LazyComponent } from '../components/LazyCompoent'
import { useHeight } from '../hooks/useHeight'
import { Factory } from '../utils/Factory'
import { importGlob } from '../utils/importGlob'

const getLayoutCollections = (component: 'headers' | 'footers' | 'contents') => {
  const output: Record<string, Factory> = {}
  const importedCompoents = importGlob(`/src/layouts/${component}`)

  for (const componentPath in importedCompoents) {
    output[componentPath] = new Factory(importedCompoents[componentPath])
  }

  return output
}

const getLayoutFactory = (
  component: 'headers' | 'footers' | 'contents',
  name: string
): Factory | null => {
  const collections = getLayoutCollections(component)
  if (name === 'none' || !collections) return null

  return collections[name] || collections['index'] || null
}

const withNcLayout = (
  Component: FC,
  options?: {
    header?: string
    content?: string
    footer?: string
  }
) => {
  const MemoComponent = memo(Component)
  const headerFactory = getLayoutFactory('headers', options?.header || 'index')
  const contentFactory = getLayoutFactory('contents', options?.content || 'index')
  const footerFactory = getLayoutFactory('footers', options?.footer || 'index')

  const ReturnedComponent: FC & { factories?: Factory[] } = () => {
    const [headerRef, headerHeight] = useHeight()
    const [footerRef, footerHeight] = useHeight()

    return (
      <Fragment>
        {headerFactory && (
          <Header ref={headerRef}>
            <LazyComponent factory={headerFactory} />
          </Header>
        )}

        {contentFactory ? (
          <Main headerHeight={headerHeight} footerHeight={footerHeight}>
            <LazyComponent factory={contentFactory}>
              <MemoComponent />
            </LazyComponent>
          </Main>
        ) : (
          <main>
            <MemoComponent />
          </main>
        )}

        {footerFactory && (
          <footer ref={footerRef}>
            <LazyComponent factory={footerFactory} />
          </footer>
        )}
      </Fragment>
    )
  }

  _.set(
    ReturnedComponent,
    'factories',
    [headerFactory, contentFactory, footerFactory].filter((f) => f)
  )

  return ReturnedComponent
}

const Main = styled.main`
  min-height: ${({
    headerHeight = 0,
    footerHeight = 0,
  }: {
    headerHeight?: number
    footerHeight?: number
  }) => `calc(100vh - ${headerHeight + footerHeight}px)`};
`

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`

export { withNcLayout }
