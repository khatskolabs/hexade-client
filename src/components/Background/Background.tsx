import React, { ReactNode } from "react"
import Styles from "./Background.module.css"

type BackgroundProps = {
  children: ReactNode;
  mode?: "dark" | "dark-simple" | "light" | "light-simple";
  layout?: "center" | "space-around" | "space-between";
}

const defaultProps = {
  mode: "dark",
  layout: "center"
}

const Background = (props: BackgroundProps & typeof defaultProps) => {
  const { children, mode, layout } = props

  const modes = new Map([
    ["dark", Styles.darkMode],
    ["dark-simple", Styles.darkSimpleMode],
    ["light", Styles.lightMode],
    ["light-simple", Styles.lightSimpleMode]
  ])

  const layouts = new Map([
    ["center", Styles.layoutCenter],
    ["space-around", Styles.layoutSpaceAround],
    ["space-between", Styles.layoutSpaceBetween]
  ])

  return (
    <div className={Styles.container + " " + modes.get(mode) + " " + layouts.get(layout)} id="container">
      {(mode === "dark" || mode === "dark-simple") && <div>
        <div className={Styles.left}></div>
        <div className={Styles.right}></div>
      </div>}
      {children}
    </div>
  )
}
Background.defaultProps = defaultProps

export default Background
