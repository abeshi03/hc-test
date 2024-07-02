// 1から100までの数を順に表示するプログラムを作成してください。ただし、以下の条件に従ってください。
// 数が3の倍数のときは、数の代わりに「Fizz」と表示する。
// 数が5の倍数のときは、数の代わりに「Buzz」と表示する。
// 数が3の倍数かつ5の倍数のときは、数の代わりに「FizzBuzz」と表示する。

// TODO
const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
}

// 実行して結果を確認してください
fizzBuzz();
