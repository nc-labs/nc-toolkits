import React, { useCallback, useLayoutEffect } from 'react'
import { useBoolean } from 'ahooks'
import { Factory } from '../utils/Factory'
import { ChunkLoadError } from './ChunkLoadError'
import { Loading } from './Loading'

const delay = (ms?: number) => new Promise((resolve) => setTimeout(resolve, ms || 1000))

const LazyComponent: React.FC<React.PropsWithChildren<{ factory: Factory }>> = React.memo(
  ({ factory, children }) => {
    const [isLoading, { setTrue: onLoading, setFalse: offLoading }] = useBoolean(!factory.isFetched)

    const fetch = useCallback(() => {
      if (factory.isFetched) return

      onLoading()
      Promise.all([delay(), factory.fetch()]).finally(offLoading)
    }, [factory.isFetched])

    useLayoutEffect(fetch, [factory.isFetched])

    if (isLoading) return <Loading />
    if (factory.error) return <ChunkLoadError error={factory.error} onReload={fetch} />
    return <factory.Component>{children}</factory.Component>
  }
)

export { LazyComponent }
