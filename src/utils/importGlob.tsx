import _ from 'lodash'
import { T_FactoryReturn } from './Factory'

const importGlob = (basePath: string) => {
  const data = _.pickBy(
    // @ts-expect-error
    import.meta.glob('/src/{layouts,pages}/**/*.tsx'),
    function (__val, key) {
      return _.startsWith(key, basePath)
    }
  )

  const output: Record<string, T_FactoryReturn> = {}

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
