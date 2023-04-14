import React, { NamedExoticComponent, memo } from 'react'
import { unstable_HistoryRouter as UnstableHistoryRouter, useRoutes } from 'react-router-dom'
import { routes } from '../routes'
import { history } from '../utils/history'

const Routes = memo(() => useRoutes(routes))

const HistoryRouter: NamedExoticComponent = memo(() => (
  // @ts-expect-error
  <UnstableHistoryRouter history={history}>
    <Routes />
  </UnstableHistoryRouter>
))

export { HistoryRouter }
