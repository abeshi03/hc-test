// 配列の中からランダムに1つの要素を返す関数を作成してください
// 作成後、numbersとstringsで実行して、console.logに出力してください
const numbers = [1,2,3,4,5,6,7,8,9]
const strings = ["hoge", "huge", "ooo"]

// TODO
const pickRandomElement = <T>(arr: T[]): T | undefined => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

console.log(pickRandomElement(numbers))
console.log(pickRandomElement(strings))
