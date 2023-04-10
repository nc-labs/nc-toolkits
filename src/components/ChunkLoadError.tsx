// TODO viết 1 component đẹp hơn để thông báo việc lỗi chunk load
import React from 'react'

const ChunkLoadError: React.FC<{ error?: string; onReload: () => void }> = React.memo(
  ({ onReload, error }) => (
    <React.Fragment>
      {error} <button onClick={onReload}>Re-fetch</button>
    </React.Fragment>
  )
)

export { ChunkLoadError }
