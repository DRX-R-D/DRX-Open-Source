import { assertEquals } from '../../deps.ts'
import { reduce } from './index.ts'

Deno.test('"reduce"', () => {
  assertEquals(reduce((prev: number, cur: number) => prev + cur, 0, [1, 2, 3]), 6)
})
