import React from 'react'
import _ from 'lodash'
import { LazyComponent } from './components/LazyCompoent'
import { Factory } from './utils/Factory'
import { importGlob } from './utils/importGlob'

const pathConvert = (path: string) => ['/', path.replace(/index$/, '').toLowerCase()].join('')
const slugConvert = (path: string) => path.split(/\]/).join('').split(/\/\[/).join('/:') // thay thees /[slug] thành /:slug

const pagePathToRoutePath = (pagePath: string) => {
  const pathWithSlugRegex = /^(\/[a-z][^\]/\s]*|\/\[[a-z][^/\s]*\])+$|^\/$/g
  let path = pathConvert(pagePath)

  if (!pathWithSlugRegex.test(path)) {
    console.warn('[nc-toolkits]', pagePath, 'is invalid path.')
    return null
  } // không tạo route nếu không đúng định dạng

  path = slugConvert(path)
  return path
}

const getRoutes = () => {
  const importedPages = importGlob('/src/pages')
  const imported404Page = importGlob('/src/pages/404.tsx')['']
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

  const routes = output.map((o) => _.pick(o, ['path', 'element']))
  const routePreloads = output.map((o) => _.pick(o, ['path', 'factory']))

  // @ts-expect-error
  if (imported404Page) {
    const page404Factory = new Factory(importGlob('/src/pages/404.tsx')[''])

    routes.push({
      path: '*',
      element: <LazyComponent factory={page404Factory} />,
    })
  }

  return {
    routes,
    routePreloads,
  }
}

const { routes, routePreloads } = getRoutes()

export { routePreloads, routes }
