import React from 'react'
import { lazy } from 'nc-lazy'

const getRoutes = (lazyFunction?: (factory: any) => React.LazyExoticComponent<any>) => {
  // @ts-expect-error
  const importedRoutes = import.meta.glob('/src/pages/**/[a-z[]*.tsx')
  const output = []
  const lazyFunc = lazyFunction || lazy

  for (const key in importedRoutes) {
    output.push({
      path: key.split(/\/src\/pages|\.tsx$|\/index\.tsx/g).join('') || '/',
      element: (() => {
        const Render = lazyFunc(importedRoutes[key])
        return <Render />
      })(),
    })
  }

  return output
}

export { getRoutes }
