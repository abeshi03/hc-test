import { GetAnimalsResponse } from "./types/GetAnimalsResponse";

export const getMockAnimals = (): GetAnimalsResponse => {
  return {
    statusCode: 200,
    message: "success",
    data: {
      animals: [
        {
          id: 1,
          name: "ライオン"
        },
        {
          id: 2,
          name: "うさぎ"
        },
        {
          id: 3,
          name: "犬"
        },
        {
          id: 4,
          name: "猫"
        },
        {
          id: 5,
          name: "鳥"
        },
      ]
    }
  }
}
