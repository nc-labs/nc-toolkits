import { Factory } from './Factory'
import { T_Factory } from './lazy'

const getCollectionByType = (
  type: 'headers' | 'footers' | 'contents'
): Record<string, T_Factory> => {
  switch (type) {
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
}

const getLayoutCollections = (component: 'headers' | 'footers' | 'contents') => {
  const output: Record<string, Factory> = {}
  const importedCompoents = getCollectionByType(component)

  for (const key in importedCompoents) {
    const parsedKey =
      key.split(new RegExp(`/src/layouts/${component}/|.tsx$|/index.tsx$`, 'g')).join('') || 'index'
    output[parsedKey] = new Factory(importedCompoents[key])
  }

  return output
}

export { getLayoutCollections }
