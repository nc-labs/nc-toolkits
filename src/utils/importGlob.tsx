import _ from 'lodash'
import { T_Factory } from './lazy'

const importGlob = (basePath: string) => {
  // @ts-expect-error
  const data = _.pickBy(import.meta.glob('/src/{layouts,pages}/**/*.tsx'), function (__val, key) {
    return _.startsWith(key, basePath)
  })

  const output: Record<string, T_Factory> = {}

  for (const key in data) {
    const baseName = key
      .replace(basePath, '')
      .replace(/\.tsx$/, '')
      .replace(/^\//, '')

    output[baseName] = () => import(`${key}?t=${Date.now()}`)
  }

  return output
}

export { importGlob }
