import React, {ChangeEvent, FC} from "react"
import s from "./style.module.sass";

type InputFieldProps = {
  label?: string
  required?: boolean
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type: "text" | "number" | "password"
  name: string
  error?: boolean
  errorMessage?: string
}

const InputField: FC<InputFieldProps> = ({
  label,
  required = false,
  value,
  onChange,
  type,
  name,
  error = false,
  errorMessage,
}) => {
  return (
    <div className={s.formItem}>
      <label>
        <span className={s.formName}>{label}</span>
        <span className={s.label}>必須</span>
        <input
          className={s.input}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      </label>
      {error && (
        <p className={s.errorMessage}>{errorMessage}</p>
      )}
    </div>
  )
}

export default InputField
