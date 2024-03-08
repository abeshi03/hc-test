import {getMockAnimals} from "../../mockApi";

type Address = {
  // 都道府県
  prefecture: string
  // 市区町村
  city: string
}

type User = {
  id: number
  name: string
  age: 18
  description?: string
  address: Address
}

type Post = {
  id: number
  text: string
  author: User
  createdAt: Date
}

export const useService = () => {

  const user: User = {
    id: 1,
    age: 18,
    name: "テスト太郎",
    address: {
      prefecture: "東京都",
      city: "世田谷区",
    },
    description: "よろしくお願いします。"
  }

  const post: Post = {
    id: 1,
    text: "テスト投稿",
    createdAt: new Date(),
    author: user
  }

  const getAnimals = () => {
    return getMockAnimals()
  }

  const { data } = getAnimals()

  const rabbit = (() => {
    return data.animals.find((animal) => animal.name === "うさぎ")
  })()

  return {
    rabbit,
    user,
    post,
    getAnimals
  }
}
