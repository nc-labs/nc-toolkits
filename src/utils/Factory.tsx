import React from 'react'
import { Loading } from '../components/Loading'
import { T_Factory } from './lazy'

class Factory {
  factory: T_Factory
  isFetched: boolean = false
  Component: React.FC<any> = Loading
  error: string = ''
  #filePath: string = ''

  constructor(factory: T_Factory) {
    this.factory = factory
  }

  fetch = async () => {
    const maxTryTimes = 3 // cho phép fetch tối đa 3 lần

    for (let index = 0; index < maxTryTimes; index++) {
      try {
        const { default: Component } = await this._factory()
        this.Component = Component
        this.isFetched = true
        this.error = ''
        break // nếu fetch thành công thì done luôn không cần thử lại
      } catch (e) {
        const filePath: string = (e?.message || '').match(/http[s]{0,1}:\/\/\S+/)?.[0] || ''
        this.#filePath = filePath.replace(/[?].+$/, '') // trả về file path thực sự của hàm import, do path sau khi build có thể bị thay đổi tên
        if (index !== maxTryTimes - 1) continue // nếu chưa phải lần fetch cuối cùng thì không làm gì cả, để vòng for tự tăng và thử load lại lần nữa

        // đây là lần fetch cuối cùng, tức là 3 lần liên tiếp fetch bị lỗi
        console.error('[nc-toolkits]', e.message)
        this.error = e.message
      }
    }
  }

  private get _factory(): T_Factory {
    return this.#filePath ? () => import(`${this.#filePath}?t=${Date.now()}`) : this.factory
  }
}

export { Factory }
