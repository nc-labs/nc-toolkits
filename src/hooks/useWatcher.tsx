import { useEventListener } from 'ahooks'

const watcher = {
  useWatcher: <T,>(name: string, listener: (data: T) => void) => {
    // @ts-expect-error
    useEventListener(name, ({ detail }: { detail: T }) => {
      listener(detail)
    })
  },
  emitWatcher: <T,>(name: string, data: T) =>
    window.dispatchEvent(new CustomEvent(name, { detail: data })),
}

export { watcher }
