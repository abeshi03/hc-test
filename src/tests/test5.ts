type User = {
  id: string
  firstName: string
  lastName: string
  birthday: {
    year: number
    month: number
    day: number
  }
}

const testUser: User = {
  id: "id",
  lastName: "テスト",
  firstName: "太郎",
  birthday: {
    year: 1988,
    month: 12,
    day: 12
  }
}


// Q1 苗字と名前を受け取り、フルネームを返す関数を作成してください
// 実行してtargetUserのfullNameをconsole.logで出力してください
function fullName(lastName: string, firstName: string) {
  return `${lastName}${firstName}`
}

console.log(fullName(testUser.lastName, testUser.firstName))

// Q2 birthdayを引数に受け取り、現在の年齢を返す関数を作成してください
// 作成した関数を実行し、console.logでtestUserの年齢を出力してください
function currentAge(birthday: {year: number, month: number, day: number}) {
  const today = new Date()
  const thisYear = today.getFullYear()
  const thisMonth = today.getMonth() + 1
  const thisDay = today.getDate()

  let age = thisYear - birthday.year

  if (thisMonth < birthday.month || (thisMonth === birthday.month && thisDay < birthday.day)) {
    age--
  }

  return age
}

console.log(currentAge(testUser.birthday))


// Q3 2で年齢が出せるようになったので、targetUserにageのプロパティを追加してconsole.logで出力してください。
// イミューダブルに追加して出力してください

const newTestUser = {
  ...testUser,
  age: currentAge(testUser.birthday)
}

console.log(newTestUser)
