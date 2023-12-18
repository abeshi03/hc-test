import s from "./index.module.sass"
import { useEffect, useState } from "react";

export default function Home() {

  const [ isLoading, setIsLoading ] = useState(false)
  const [ isError, setIsError ] = useState(false)
  const [ users, setUsers ] = useState([])

  const getUsers = async() => {
    const url = "https://jsonplaceholder.typicode.com/users"
    setIsLoading(true)

    try {
      const res = await fetch(url)
      const users = await res.json()

      setUsers(users)
    } catch (error) {

      setIsError(true)
      console.error("user fetch error", error)

    } finally {
      setIsLoading(false)
      setIsError(false)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

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
