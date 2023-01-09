import { assertEquals } from 'https://deno.land/std@0.171.0/testing/asserts.ts'
import { isArray } from './index.ts'

Deno.test('"isArray"', () => {
  assertEquals(isArray([1, 2, 3]), true)
})
