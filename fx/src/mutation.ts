/**
 * 객체의 특정 key의 값을 바꾼 후 새로운 객체로 반환하는 함수
 *
 * @name mutation
 * */

const mutation = <T = any, R = { [key: string | number]: any }>(key: string | number, value: T, collection: R) => ({
  ...collection,
  [key]: value,
})

export default mutation
