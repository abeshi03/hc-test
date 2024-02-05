import s from "./style.module.sass"
export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrap}>
        <p className={s.headerTitle}>ヘッダー</p>
      </div>
    </header>
  )
}

