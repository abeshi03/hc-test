// スプレット構文

// 配列のスプレット構文
// NG例
// const array1 = [1,2,3]
// const array2 = [4,5,6]

// console.log(array1)
// array2.map((item) => array1.push(item))
// console.log(array1)

// const array3 = [1,2,3]
// const array4 = [4,5,6]

// console.log(array3)
// const array5 = [ ...array3, ...array4 ]
// console.log(array5)

// オブジェクトのスプレット構文
// const obj1 = {
//   a: "a",
//   b: "b",
//   c: "c"
// }
//
// const obj2 = {
//   d: "d",
//   e: "e",
//   f: "f"
// }

// console.log(obj1)
// console.log(obj2)

// const obj3 = { ...obj1, ...obj2 }
//
// const answer = {
//   a: "a",
//   b: "b",
//   c: "c",
//   d: "d",
//   e: "e",
//   f: "f",
//   a: "変更しました"
// }
//
// console.log(answer)
//
// const obj4 = {
//   ...obj1,
//   ...obj2,
//   a: "変更しました2"
// }
//
// console.log(obj4)


// export const Default = {
//   args: {
//     data: [ "データあるよ" ],
//     isError: false,
//     isLoading: false,
//     onReset: () => void 0,
//     displayBtn: false
//   },
// }


// export const Loading = {
//   args: {
//     data: [ "データあるよ" ],
//     isError: false,
//     isLoading: true,
//     onReset: () => void 0,
//     displayBtn: false
//   },
// }

// export const Loading = {
//   args: {
//     ...Default.args,
//     isLoading: true,
//   },
// }
//
// export const Error = {
//   args: {
//     ...Default.args,
//     isError: true,
//   },
// }


// 普通の関数
// function getName() {
//   return "名前が返ります"
// }
//
// console.log(getName())
//
// // 即時関数 ... 引数を取らない時にしか使えない
// const getName1 = (() => {
//   return "名前が返ります1"
// })()
//
// console.log(getName1)
//
// export const sum = (a: number, b: number): number => {
//   return a + b
// }
//
// const results = sum(2, 2)
//
// console.log(results)
