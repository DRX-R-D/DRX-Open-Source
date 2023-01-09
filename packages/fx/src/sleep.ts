/**
 * 지정한 시간만큼 딜레이를 주는 함수
 *
 * @name sleep
 * */

const sleep = (timer) => new Promise((resolve) => {
  setTimeout(resolve, timer)
})

export default sleep
