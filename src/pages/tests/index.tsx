import { useService } from "../mock/service";

const TestsPage = () => {

  const {} = useService()

  return (
    <div>
      <p>課題1 (下のPタグの中にpostのテキストの値を表示してください)</p>
      {/*<p></p>*/}

      <br/>
      <p>課題2 (下のPタグの中にuserの都道府県を表示させてください)</p>
      {/*<p></p>*/}

      <br/>
      <p>課題3 (getMockAnimalsから取得した動物の名前をidの昇順で表示してください。)</p>
      {/* ここに動物全てを表示する処理を書く  */}

      <br/>
      <p>課題4 (getMockAnimalsから取得した動物の名前をidの降順で表示してください)</p>
      {/* ここに動物全てを表示する処理を書く  */}

      <br/>
      <p>課題5 (getMockAnimalsから取得した動物の中からうさぎの名前のみを表示してください)</p>
      {/*<p>うさぎ</p> ここにうさぎが表示されればOK*/}
    </div>
  )
}

export default TestsPage
