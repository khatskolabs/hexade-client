import React, { ReactNode } from "react"
import { CheckIcon } from "../../assets/images"
import Styles from "./InfoBox.module.css"

type InfoBoxProps = {
  children: ReactNode;
}

const defaultProps = {}

const InfoBox = (props: InfoBoxProps & typeof defaultProps) => {
  const { children } = props

  return (
    <div className={Styles.container}>
      <div className={Styles.content}>{children}</div>
    </div>
  )
}
InfoBox.defaultProps = defaultProps

export default InfoBox
