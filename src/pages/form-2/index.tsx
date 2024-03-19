import { FC } from "react"
import s from "./style.module.sass"

import { useForm, SubmitHandler } from "react-hook-form"

type Form = {
  name: string
  age: string
}

export const FormPage2: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Form>({
    defaultValues: {
      name: "",
      age: "",
    }
  })

  const age = watch("age")
  const ageNumber = Number(age) || 0
  const validation = {
    name: {...register("name", {required: "名前は必須です"})},
    age:  {...register("age", {required: "年齢は必須です",
        validate: value => Number(value) > 0 || "1以上で入力してください"})},
  }

  const onSubmit: SubmitHandler<Form> = (data) =>console.log(data)

  return(
    <>
      <header className={s.header}>
        <p>ヘッダー</p>
      </header>
      <div className={s.wrapper}>
        <h1 className={s.title}>フォームのページ</h1>
        <section className={s.section}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.formItem}>
              <label>
                <span className={s.formName}>名前</span>
                <span className={s.label}>必須</span>
                <input
                  className={s.input}
                  type="text"
                  {...validation.name}
                />
              </label>
              {errors.name?.message && (
                <p className={s.errorMessage}>{errors.name?.message}</p>
              )}
            </div>

            <div className={s.formItem}>
              <label>
                <span className={s.formName}>年齢</span>
                <span className={s.label}>必須</span>
                <input
                  className={s.input}
                  type="number"
                  {...validation.age}
                />
              </label>
              {errors.age?.message && (
                <p className={s.errorMessage}>{errors.age?.message}</p>
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

export default FormPage2
