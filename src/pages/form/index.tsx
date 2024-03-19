import React, {ChangeEvent, FC, useState} from "react"
import s from "./style.module.sass"
import FormGroup from "./formGroup";

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
            <FormGroup
              label="名前"
              required={true}
              value={name}
              onChange={onChangeName}
              type="text"
              name="name"
              error={nameErrorMessage}
              errorMessage={nameErrorMessage}
            />
            <FormGroup
              label="年齢"
              required={true}
              value={age}
              onChange={onChangeAge}
              type="number"
              name="age"
              error={ageErrorMessage}
              errorMessage={ageErrorMessage}
            />
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
