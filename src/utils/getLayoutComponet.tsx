import React from 'react'
import { lazy } from 'nc-lazy'

const getLayoutComponet = (
  component: 'headers' | 'footers' | 'contents',
  lazyFunction?: (factory: any) => React.LazyExoticComponent<any>
) => {
  const importedRoutes = (() => {
    switch (component) {
      case 'headers':
        // @ts-expect-error
        return import.meta.glob('/src/layouts/headers/*.tsx')
      case 'footers':
        // @ts-expect-error
        return import.meta.glob('/src/layouts/footers/*.tsx')
      case 'contents':
        // @ts-expect-error
        return import.meta.glob('/src/layouts/contents/*.tsx')
      default:
        return {}
    }
  })()
  const output = {}
  const lazyFunc = lazyFunction || lazy

  for (const key in importedRoutes) {
    // @ts-expect-error
    output[
      key.split(new RegExp(`/src/layouts/${component}/|.tsx$|/index.tsx$`, 'g')).join('') || 'index'
    ] = lazyFunc(importedRoutes[key])
  }

  return output
}

export { getLayoutComponet }
