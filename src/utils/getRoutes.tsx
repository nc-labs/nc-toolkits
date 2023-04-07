import React from 'react'
import _ from 'lodash'
import { LazyComponent } from '../components/LazyCompoent'
import { Factory } from './Factory'
import { T_Factory } from './lazy'

// TODO xử lý trường hợp 2 slug trùng tên
const getRoutes = () => {
  // @ts-expect-error
  const importedRoutes: Record<string, T_Factory> = import.meta.glob('/src/pages/**/[a-z[]*.tsx')
  const output = []
  // const lazyFunc = lazyFunction || lazy

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
    const factory = new Factory(importedRoutes[key])

    output.push({
      path,
      factory,
      element: <LazyComponent factory={factory} />,
    })
  }

  return {
    routes: output.map((o) => _.pick(o, ['path', 'element'])),
    routePreloads: output.map((o) => _.pick(o, ['path', 'factory'])),
  }
}

export { getRoutes }
