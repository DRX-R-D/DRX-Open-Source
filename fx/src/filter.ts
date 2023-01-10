import { curry, flow, take, toIterator } from './index.ts'

/**
 * 해당 조건에 맞는 값만 걸러내주는 함수
 *
 * @name filter
 * */

const filter = curry((fn: () => boolean, list: any[]) => {
  const filterIterator: any = function* (list: any) {
    for (const item of toIterator(list)) {
      const check = flow(item, fn)

      if (check) yield item
    }
  }

  return take(Infinity, filterIterator(list))
})

export default filter
