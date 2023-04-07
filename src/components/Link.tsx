import React, { useEffect, useMemo, useRef } from 'react'
import { useInViewport } from 'ahooks'
import { matchPath, Link as DefaultLink } from 'react-router-dom'
import { routePreloads } from '../routes'

const Link: typeof DefaultLink = React.memo(
  React.forwardRef((props, forwardedRef) => {
    // @ts-expect-error
    const ref = useRef(forwardedRef?.current || forwardedRef || null)
    const [inViewport] = useInViewport(ref)

    const targetPath: string = useMemo(
      () => (typeof props.to === 'string' ? props.to : props.to.pathname) as string,
      [JSON.stringify(props.to)]
    )

    const currentRoute = useMemo(
      () => routePreloads.find((r) => matchPath(r.path, targetPath)),
      [targetPath]
    )

    useEffect(() => {
      if (!inViewport) return // không thực hiện nếu link chưa hiển thị trên màn hình
      if (!currentRoute || !currentRoute.factory) return // không thực hiện nếu không tìm được route
      if (currentRoute.factory.isFetched) return // không thực hiện gì nếu đã được preload

      currentRoute.factory.fetch()
    }, [inViewport])

    return <DefaultLink {...props} ref={ref} />
  })
)

export { Link }
