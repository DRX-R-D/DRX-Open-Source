import { toIterator, isPromise } from './index.ts'

/**
 * 배열에서 일정한 갯수만 꺼내주고, 실행을 해주는 함수
 *
 * @name take
 * */

const take = <T = any, V = any>(count: number, list: T[]) => {
  if (count < 1) return []

  const result: any[] = []

  const iterList = toIterator(list)
  const recursive = () => {
    let current

    while (!(current = iterList.next()).done) {
      const { value } = current

      if (isPromise(value))
        return value
          .then((response: any) => {
            result.push(response)

            return result.length === count ? result : recursive()
          })
          .catch((error: any) => Promise.reject(error))
      result.push(value)

      if (result.length === count) return result
    }

    return result
  }

  return recursive()
}

export default take
