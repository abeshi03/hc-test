import { FC } from "react"
import Link from "next/link"
import { Layout } from "../components/Layout"
import s from "./style.module.sass"

const Top: FC = () => {
  return (
    <Layout>
      <h2>トップページです</h2>
      <div className={s.links}>
        <Link href="/users">ユーザー一覧ページへ</Link><br/>
        <Link href="/mock">モックページへ</Link><br/>
        <Link href="/count">カウントページ</Link><br/>
        <Link href="/tests">テストページ</Link><br/>
        <Link href="/form">フォームページ</Link><br/>
        <Link href="/form-2">フォームページ2</Link><br/>
      </div>
    </Layout>
  )
}

export default Top
