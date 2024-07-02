// 数値の配列を受け取り、その配列内の数値の平均値を返す関数 averageArrayを作成してください。
// 小数点第一位で四捨五入し、必ず整数で返すようにしてください
// 作成した関数にnumbersを入れて実行してconsole.logに出力してください。
const numbers = [100, 49, 2, 57, 13]

// TODO
function averageArray(numbers: number[]): number | undefined {
  let sum = 0
  for(let i= 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  let average = Math.round(sum / numbers.length)
  return average
}

console.log(averageArray(numbers))

//　適切にエラーを出す
console.log(averageArray({ id: "fdasfs" }))
console.log(averageArray("テスト"))
console.log(averageArray([1, 3, "テスト", ["テスト"]]))
