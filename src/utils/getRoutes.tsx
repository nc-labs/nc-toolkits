import React from 'react'
import _ from 'lodash'
import { LazyComponent } from '../components/LazyCompoent'
import { Factory } from './Factory'
import { importGlob } from './importGlob'
import { pagePathToRoutePath } from './pagePathToRoutePath'

const getRoutes = () => {
  const importedPages = importGlob('/src/pages')
  const output = []

  for (const pagePath in importedPages) {
    const path = pagePathToRoutePath(pagePath)
    if (path) {
      const factory = new Factory(importedPages[pagePath])

      output.push({
        path,
        factory,
        element: <LazyComponent factory={factory} />,
      })
    }
  }

  return {
    routes: output.map((o) => _.pick(o, ['path', 'element'])),
    routePreloads: output.map((o) => _.pick(o, ['path', 'factory'])),
  }
}

export { getRoutes }
