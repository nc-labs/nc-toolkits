import React, { PropsWithChildren, useMemo } from 'react'
import { getLayoutComponet } from '../utils/getLayoutComponet'

const layouts = {
  headers: getLayoutComponet('headers'),
  footers: getLayoutComponet('footers'),
  contents: getLayoutComponet('contents'),
}

const LayoutComponent: React.FC<
  PropsWithChildren<{ component: 'headers' | 'footers' | 'contents'; name: string }>
> = React.memo(({ name, children, component }) => {
  const Render = useMemo(() => {
    if (name === 'none') return React.Fragment

    const collections: Record<string, any> = layouts[component]
    return collections[name] || collections['index'] || React.Fragment
  }, [component, name])

  return <Render>{children}</Render>
})

export { LayoutComponent }
