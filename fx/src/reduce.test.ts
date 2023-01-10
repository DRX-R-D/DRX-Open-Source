import { assertEquals } from 'https://deno.land/std@0.171.0/testing/asserts.ts'
import { reduce } from './index.ts'

Deno.test('"reduce"', () => {
  assertEquals(reduce((prev: number, cur: number) => prev + cur, 0, [1, 2, 3]), 6)
})
