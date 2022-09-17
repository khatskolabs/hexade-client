import React from "react"
import Styles from "./Logo.module.css"

type LogoProps = {
  mode?: "dark" | "light";
  size?: "small" | "average" | "big";
  name?: string;
}

const defaultProps = {
  mode: "light",
  size: "average",
  name: "hexade"
}

const Logo = (props: LogoProps & typeof defaultProps) => {
  const { mode, size, name } = props

  const modes = new Map([
    ["dark", Styles.darkMode],
    ["light", Styles.lightMode]
  ]) 

  const sizes = new Map([
    ["small", Styles.smallSize],
    ["average", Styles.averageSize],
    ["big", Styles.bigSize]
  ])

  return (
    <div className={Styles.container}>
      <label className={Styles.name + " " + modes.get(mode) + " " + sizes.get(size)}>{name}</label>
    </div>
  )
}
Logo.defaultProps = defaultProps

export default Logo
