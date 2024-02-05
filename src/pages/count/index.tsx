import { useState } from "react";
import { Layout } from "../../components/Layout";
import s from "./style.module.sass"

const CountPage = () => {

  const [ count, setCount ] = useState<number>(0)
  const countUp = () => setCount(prev => prev + 1)
  const countDown = () => setCount(prev => prev - 1)

  return (
    <Layout>
      <p>カウントページです</p>

      {count}
      <div className={s.btnWrap}>
        <button className={s.btn} onClick={countUp}>+</button>
        <button className={s.btn} onClick={countDown}>-</button>
      </div>
    </Layout>
  )
}

export default CountPage
