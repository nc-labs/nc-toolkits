import React from 'react'
import _ from 'lodash'
import { T_Factory, lazy } from './lazy'

// TODO xử lý trường hợp 2 slug trùng tên
const getRoutes = (lazyFunction?: (factory: any) => React.LazyExoticComponent<any>) => {
  // @ts-expect-error
  const importedRoutes: Record<string, T_Factory> = import.meta.glob('/src/pages/**/[a-z[]*.tsx')
  const output = []
  const lazyFunc = lazyFunction || lazy

  for (const key in importedRoutes) {
    const pathWithSlugRegex = /^(\/[a-z][^\]/\s]*|\/\[[a-z][^/\s]*\])+$|^\/$/g
    let path =
      key
        .split(/\/src\/pages|\.tsx$|\/index\.tsx$/g)
        .join('')
        .toLowerCase() || '/'

    if (!pathWithSlugRegex.test(path)) {
      console.warn('[nc-toolkits]', key, 'is invalid path.')
      continue
    } // không tạo route nếu không đúng định dạng

    path = path.split(/\]/).join('').split(/\/\[/).join('/:') // thay thees /[slug] thành /:slug

    output.push({
      path,
      element: (() => {
        const Render = lazyFunc(importedRoutes[key])
        return <Render />
      })(),
      preload: importedRoutes[key],
    })
  }

  return {
    routes: output.map((o) => _.pick(o, ['path', 'element'])),
    routePreloads: output.map((o) => _.pick(o, ['path', 'preload'])),
  }
}

export { getRoutes }
