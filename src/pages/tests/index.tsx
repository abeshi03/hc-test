import { useService } from "../mock/service"

export const TestsPage = () => {
  const {
    user,
    post,
    getAnimals,
    rabbit,
  } = useService()

  const { data } = getAnimals();

  return (
    <div>
      <p>課題1 (下のPタグの中にpostのテキストの値を表示してください)</p>
      <p>{post.text}</p>

      <br/>
      <p>課題2 (下のPタグの中にuserの都道府県を表示させてください)</p>
      <p>{user.address.prefecture}</p>

      <br/>
      <p>課題3 (getMockAnimalsから取得した動物の名前をidの昇順（ascending order）で表示してください。)</p>

      {data.animals.map((animal) => (
        <p key={animal.id}>{animal.name}</p>
      ))}

      <br/>
      <p>課題4 (getMockAnimalsから取得した動物の名前をidの降順（descending order）で表示してください)</p>
      {data.animals.sort((a, b) => b.id - a.id).map((animal) => (
        <p key={animal.id}>{animal.name}</p>
      ))}

      <br/>
      <p>課題5 (getMockAnimalsから取得した動物の中からうさぎの名前のみを表示してください)</p>

      {data.animals.filter(animal => animal.name === "うさぎ").map((rabbit) => (
        <p key={rabbit.id}>{rabbit.name}</p>
      ))}

      <p>{rabbit.name}</p>
    </div>
  )
}
export default TestsPage
