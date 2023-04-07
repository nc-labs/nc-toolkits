// TODO viết custom lazy dựa trên React.lazy để thực hiện retry khi load lazy component lỗi
import React from 'react'

type T_Factory = () => Promise<{ default: React.FC<any> }>

export type { T_Factory }
