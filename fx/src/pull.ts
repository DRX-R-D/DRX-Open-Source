import { curry } from './index.ts'

import type { TypeStringOrNumber } from '../index.d.ts'

/**
 * 객체에서 원하는 key의 value 값을 리턴해주는 함수
 *
 * @name pull
 * */

const pull = curry((key: TypeStringOrNumber, data: { [key: TypeStringOrNumber]: any }) => data[key])

export default pull
