import type { FC } from "react"
import React from "react"

import s from "./style.module.sass"

export type Props = {
  className?: string
}

export const Spinner: FC<Props> = props => {
  const {
    className,
  } = props

  return (
    <div className={`${s.root} ${className || ''}`} />
  )
}
