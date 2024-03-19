import React, {ChangeEvent, FC, useState} from "react"
import s from "./style.module.sass"

export const FormPage: FC = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const [nameErrorMessage, setNameErrorMessage] = useState("")
  const [ageErrorMessage, setAgeErrorMessage] = useState("")

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    setNameErrorMessage("")
    setAgeErrorMessage("")

    let isValid = true;

    if (!name) {
      setNameErrorMessage("名前は必須です")
      isValid = false
    }
    const ageNumber = Number(age)
    if (!age || ageNumber <= 0) {
      setAgeErrorMessage("年齢は必須です")
      isValid = false
    }

    if (isValid) {
      console.log({ name, age: ageNumber })
    }
  }

  return (
    <>
      <header className={s.header}>
        <p>ヘッダー</p>
      </header>
      <div className={s.wrapper}>
        <h1 className={s.title}>フォームのページ</h1>
        <section className={s.section}>
          <form onSubmit={onSubmit}>
            <div className={s.formItem}>
              <label>
                <span className={s.formName}>名前</span>
                <span className={s.label}>必須</span>
                <input
                  className={s.input}
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChangeName}
                />
              </label>
              {nameErrorMessage && (
                <p className={s.errorMessage}>{nameErrorMessage}</p>
              )}
            </div>

            <div className={s.formItem}>
              <label>
                <span className={s.formName}>年齢</span>
                <span className={s.label}>必須</span>
                <input
                  className={s.input}
                  type="number"
                  name="age"
                  value={age}
                  onChange={onChangeAge}
                />
              </label>
              {ageErrorMessage && (
                <p className={s.errorMessage}>{ageErrorMessage}</p>
              )}
            </div>
            <div>
              <input
                className={s.submitButton}
                type="submit"
                value="ボタン"
              />
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default FormPage
