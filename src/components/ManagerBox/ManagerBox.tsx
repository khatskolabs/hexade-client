import React, { ReactNode }from "react"
import Styles from "./ManagerBox.module.css"

type ManagerBoxProps = {
  index: number;
  boxes: Array<ReactNode>;
}

const defaultProps = {}

const ManagerBox = (props: ManagerBoxProps & typeof defaultProps) => {
  const { index, boxes } = props

  return (
    <div className={Styles.container}>{boxes[index]}</div>
  )
}
ManagerBox.defaultProps = defaultProps

export default ManagerBox
