// TODO viết custom lazy dựa trên React.lazy để thực hiện retry khi load lazy component lỗi
import React from 'react'

type T_Factory = (() => Promise<{ default: React.FC<any> }>) & {
  isPreloaded?: boolean
  Component?: React.FC<any>
}

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000))

const factoryWithMinTime =
  (factory: T_Factory): T_Factory =>
  () => {
    if (factory.isPreloaded) return factory()

    return Promise.all([factory(), delay()]).then(([moduleExports]) => {
      factory.Component = moduleExports.default

      return moduleExports
    })
  }

const lazy = (factory: T_Factory) =>
  factory.isPreloaded && factory.Component
    ? factory.Component
    : React.lazy(factoryWithMinTime(factory))

export { lazy }
export type { T_Factory }
