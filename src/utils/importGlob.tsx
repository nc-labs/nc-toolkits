import _ from 'lodash'
import { T_Factory } from './lazy'

const importGlob = (basePath: string) => {
  const data = _.pickBy(
    // @ts-expect-error
    import.meta.glob('/src/{layouts,pages}/**/*.tsx'),
    function (__val, key) {
      return _.startsWith(key, basePath)
    }
  )

  const output: Record<string, T_Factory> = {}

  for (const key in data) {
    const baseName = key
      .replace(basePath, '')
      .replace(/\.tsx$/, '')
      .replace(/^\//, '')

    output[baseName] = data[key]
  }

  return output
}

export { importGlob }
