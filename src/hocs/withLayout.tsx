import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CUSTOM_EVENTS } from '../constants/customEvents'
import { watcher } from '../hooks/useWatcher'

type T_LayoutOptions = {
  header?: string
  content?: string
  footer?: string
}

const withLayout = (Comment: React.FC<any>, options?: T_LayoutOptions) => () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    watcher.emitWatcher(CUSTOM_EVENTS.CHANGE_LAYOUTS, {
      [pathname]: {
        header: options?.header || 'index',
        content: options?.content || 'index',
        footer: options?.footer || 'index',
      },
    })
  }, [])

  return <Comment />
}

export { withLayout }
export type { T_LayoutOptions }
