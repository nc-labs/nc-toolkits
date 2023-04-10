import React from 'react'
import _ from 'lodash'
import { LazyComponent } from '../components/LazyCompoent'
import { Factory } from './Factory'
import { importGlob } from './importGlob'

const pathConvert = (path: string) => ['/', path.replace(/index$/, '').toLowerCase()].join('')
const slugConvert = (path: string) => path.split(/\]/).join('').split(/\/\[/).join('/:') // thay thees /[slug] thành /:slug

// TODO xử lý trường hợp 2 slug trùng tên
const getRoutes = () => {
  const importedPages = importGlob('/src/pages')
  const output = []

  for (const pagePath in importedPages) {
    const pathWithSlugRegex = /^(\/[a-z][^\]/\s]*|\/\[[a-z][^/\s]*\])+$|^\/$/g
    let path = pathConvert(pagePath)

    if (!pathWithSlugRegex.test(path)) {
      console.warn('[nc-toolkits]', pagePath, 'is invalid path.')
      continue
    } // không tạo route nếu không đúng định dạng

    path = slugConvert(path)
    const factory = new Factory(importedPages[pagePath])

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
