import { ReactNode } from "react";
import { Header } from "../Header";
import s from "./style.module.sass";

type Props = {
  children: ReactNode
}

export const Layout = (props: Props) => {

  return (
    <div>
      <Header/>
      <main className={s.main}>
        {props.children}
      </main>
    </div>
  )
}
