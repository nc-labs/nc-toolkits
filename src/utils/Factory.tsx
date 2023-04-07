import React from 'react'
import { Loading } from '../components/Loading'
import { T_Factory } from './lazy'

class Factory {
  factory: T_Factory
  isFetched: boolean = false
  Component: React.FC<any> = Loading
  path: string

  constructor(factory: T_Factory, path?: string) {
    this.factory = factory
    this.path = path || ''
  }

  fetch = async () => {
    const maxTryTimes = 3 // cho phép fetch tối đa 3 lần

    for (let index = 0; index < maxTryTimes; index++) {
      try {
        const { default: Component } = await this.factory()
        this.Component = Component
        this.isFetched = true
        break // nếu fetch thành công thì done luôn không cần thử lại
      } catch (e) {
        if (index === maxTryTimes - 1) {
          // đây là lần fetch cuối cùng, tức là 3 lần liên tiếp fetch bị lỗi
          // TODO viết 1 component thông báo lỗi chunk load và không cố gắng fetch lại
        }

        // nếu chưa phải lần fetch cuối cùng thì không làm gì cả, để vòng for tự tăng và thử load lại lần nữa
      }
    }
  }
}

export { Factory }
