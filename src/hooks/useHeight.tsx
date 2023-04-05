import { useMemo, useRef } from 'react'
import { useSize } from 'ahooks'

const useHeight = (): [React.MutableRefObject<null>, number] => {
  const ref = useRef(null)
  const size = useSize(ref)
  const height = useMemo(() => size?.height || 0, [size])
  return [ref, height]
}

export { useHeight }
