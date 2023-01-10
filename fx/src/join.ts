import { reduce, curry } from './index.ts'

import type { TypeStringOrNumber } from '../index.d.ts'

/**
 * 주어진 배열을 문자열로 합쳐주는 함수
 *
 * @name join
 * */

const join = curry((mark: TypeStringOrNumber, list: TypeStringOrNumber[]) =>
  reduce((prev: TypeStringOrNumber, cur: TypeStringOrNumber) => `${prev}${mark}${cur}`, list)
)

export default join
