// 配列をシャッフルして返す関数をミューダブルとイミューダブルで2パターン作成してください

// TODO
const shuffleMutable = <T>(arr: T[]): T[] => {
  for(let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

// TODO
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("ミューダブルなシャッフル:", shuffleMutable(numbers));
console.log("元の配列:", numbers); // シャッフル後の元の配列


// TODO
const shuffleImmutable = <T>(arr: T[]): T[] => {
  const newArr = [...arr]
  for(let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr

}

// TODO
const numbers2 = [10,11,12,13,14,15,16]
console.log("イミューダブルなシャッフル:", shuffleImmutable(numbers2));
console.log("元の配列:", numbers2); // 元の配列は変更されていない
