import React, { PropsWithChildren, useMemo } from 'react'
import { Factory } from '../utils/Factory'
import { getLayoutCollections } from '../utils/getLayoutCollections'
import { LazyComponent } from './LazyCompoent'

const layouts = {
  headers: getLayoutCollections('headers'),
  footers: getLayoutCollections('footers'),
  contents: getLayoutCollections('contents'),
}

const LayoutComponent: React.FC<
  PropsWithChildren<{ component: 'headers' | 'footers' | 'contents'; name: string }>
> = React.memo(({ name, children, component }) => {
  const factory: Factory | null = useMemo(() => {
    const collections = layouts[component]
    if (name === 'none' || !collections) return null

    return collections[name] || collections['index'] || null
  }, [component, name])

  if (!factory) return <React.Fragment>{children}</React.Fragment>
  return <LazyComponent factory={factory}>{children}</LazyComponent>
})

export { LayoutComponent }
