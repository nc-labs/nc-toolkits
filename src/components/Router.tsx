import React, { Suspense, useMemo, useState } from 'react'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { CUSTOM_EVENTS } from '../constants/customEvents'
import { T_LayoutOptions } from '../hocs/withLayout'
import { useHeight } from '../hooks/useHeight'
import { watcher } from '../hooks/useWatcher'
import { history } from '../utils/history'
import { Header } from './Header'
import { LayoutComponent } from './LayoutComponent'
import { Main } from './Main'
import { Routes } from './Routes'

type T_RouterProvider = React.NamedExoticComponent<{
  fallback?: React.ReactNode
}>

const Router: T_RouterProvider = React.memo(({ fallback }) => {
  const pathname = history.location.pathname
  const [layout, setLayout] = useState<Record<string, T_LayoutOptions>>({})
  const configs = useMemo(() => layout[pathname], [layout, pathname])
  const [headerRef, headerHeight] = useHeight()
  const [footerRef, footerHeight] = useHeight()

  watcher.useWatcher<Record<string, T_LayoutOptions>>(CUSTOM_EVENTS.CHANGE_LAYOUTS, (options) => {
    setLayout((prev) => ({ ...prev, ...options }))
  })

  return (
    // @ts-expect-error
    <HistoryRouter history={history}>
      <Suspense fallback={fallback}>
        {configs?.header && (
          <Header ref={headerRef}>
            <LayoutComponent component="headers" name={configs.header} />
          </Header>
        )}

        {configs?.content && (
          <Main headerHeight={headerHeight} footerHeight={footerHeight}>
            <LayoutComponent component="contents" name={configs?.content}>
              <Routes />
            </LayoutComponent>
          </Main>
        )}

        {Boolean(configs?.content) || (
          <main>
            <Routes />
          </main>
        )}

        {configs?.footer && (
          <footer ref={footerRef}>
            <LayoutComponent component="footers" name={configs?.footer} />
          </footer>
        )}
      </Suspense>
    </HistoryRouter>
  )
})

export { Router }
