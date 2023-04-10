import { Factory } from './Factory'
import { importGlob } from './importGlob'

const getLayoutCollections = (component: 'headers' | 'footers' | 'contents') => {
  const output: Record<string, Factory> = {}
  const importedCompoents = importGlob(`/src/layouts/${component}`)

  for (const componentPath in importedCompoents) {
    output[componentPath] = new Factory(importedCompoents[componentPath])
  }

  return output
}

export { getLayoutCollections }
