// 数値の配列を受け取り、その配列内の数値の合計を計算して返す関数 sumArray を作成してください。
// 作成した関数にnumbersを入れて実行してconsole.logに出力してください
const numbers = [100, 200, 300, 400, 500]

// TODO
// function sumArray(numbers: number[]): number | undefined {
//   let sum = 0
//   for(let i= 0; i < numbers.length; i++) {
//     sum += numbers[i]
//   }
//   return sum
// }

//　reduceで記述
function sumArray(number: number[]): number | undefined {
  return numbers.reduce((acc, current) => acc + current, 0)
}

console.log(sumArray(numbers))
