import React, { useEffect } from 'react'
import { useUpdate } from 'ahooks'
import { delay } from '../utils/delay'
import { Factory } from '../utils/Factory'

const LazyComponent: React.FC<React.PropsWithChildren<{ factory: Factory }>> = React.memo(
  ({ factory, children }) => {
    const reRender = useUpdate()

    useEffect(() => {
      if (factory.isFetched) return

      Promise.all([delay(), factory.fetch()]).then(() => reRender())
    }, [])

    return <factory.Component>{children}</factory.Component>
  }
)

export { LazyComponent }
