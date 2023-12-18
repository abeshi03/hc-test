import s from "./index.module.sass";
import { useUsers } from "./users";

export default function Home() {
  const { data: users, isLoading, isError } = useUsers();

  const displayUsers = () => {
    if (isLoading) return (
      <div className={s.loading}>...Loading</div>
    )

    if (isError || !users) return (
      <div className={s.error}>error</div>
    )

    return (
      <div className={s.users}>
        {users?.map((user) => (
          <div className={s.user} key={user.id}>
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={s.root}>
      <h1 className={s.h1}>ユーザー情報一覧</h1>
      {displayUsers()}
    </div>
  )
}
