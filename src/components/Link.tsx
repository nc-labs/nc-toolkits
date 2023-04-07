import React, { useEffect, useMemo, useRef } from 'react'
import { useInViewport } from 'ahooks'
import { matchPath, Link as DefaultLink } from 'react-router-dom'
import { T_Factory } from '../utils/lazy'
import { routePreloads } from './Routes'

const Link: typeof DefaultLink = React.memo(
  React.forwardRef((props, forwardedRef) => {
    // @ts-expect-error
    const ref = useRef(forwardedRef?.current || forwardedRef || null)
    const [inViewport] = useInViewport(ref)

    const targetPath: string = useMemo(
      () => (typeof props.to === 'string' ? props.to : props.to.pathname) as string,
      [JSON.stringify(props.to)]
    )

    type T_PreloadFn = T_Factory | undefined
    const preloadFn: T_PreloadFn = useMemo(
      () => routePreloads.find((r) => matchPath(r.path, targetPath))?.preload,
      [targetPath]
    )

    useEffect(() => {
      if (!inViewport) return // không thực hiện nếu link chưa hiển thị trên màn hình
      if (!preloadFn) return // không thực hiện nếu không có preloadFn
      if (preloadFn.isPreloaded) return // không thực hiện gì nếu đã được preload

      preloadFn()
      preloadFn.isPreloaded = true
    }, [inViewport])

    return <DefaultLink {...props} ref={ref} />
  })
)

export { Link }
