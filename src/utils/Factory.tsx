import React, { memo } from 'react'
import { Loading } from '../components/Loading'

type T_FactoryReturn = () => Promise<{
  default: React.FC<any> & {
    factories?: Factory[]
  }
}>

class Factory {
  factory: T_FactoryReturn
  isFetched: boolean = false
  Component: React.FC<any> = Loading
  error: string = ''

  constructor(factory: T_FactoryReturn) {
    this.factory = factory
  }

  fetch = async () => {
    try {
      const { default: Component } = await this.factory()

      if (Component.factories) {
        Promise.all(Component.factories.map((f) => f.fetch()))
      }

      this.Component = memo(Component)
      this.isFetched = true
      this.error = ''
    } catch (e) {
      console.error('[nc-toolkits]', e.message)
      this.error = e.message
    }
  }
}

export { Factory }
export type { T_FactoryReturn }
