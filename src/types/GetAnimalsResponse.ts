import { Animal } from "./Animal";

export type GetAnimalsResponse = {
  statusCode: number
  message: string
  data: {
    animals: Animal[]
  }
}
