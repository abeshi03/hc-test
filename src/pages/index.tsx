import { FC } from "react";
import Link from "next/link";
import { Layout } from "../components/Layout";
import s from "./style.module.sass"

const Top: FC = () => {
  return (
    <Layout>
      <p>トップページです</p>
      <div className={s.links}>
        <Link href="/mock">モックページへ</Link>
        <Link href="/count">カウントページ</Link>
      </div>
    </Layout>
  )
}

export default Top
