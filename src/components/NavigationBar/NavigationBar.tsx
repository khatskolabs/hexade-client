import React from "react"
import Styles from "./NavigationBar.module.css"

type NavigationBarProps = {
  currIndex?: number;
  minIndex?: number;
  maxIndex: number;
  backClick: () => void;
  nextClick: () => void;
  confirmClick: () => void;
}

const defaultProps = {
  currIndex: 0,
  minIndex: 0
}

const NavigationBar = (props: NavigationBarProps & typeof defaultProps) => {
  const { currIndex, minIndex, maxIndex, backClick, nextClick, confirmClick } = props

  return (
    <div className={Styles.container}>
      {currIndex > minIndex && <input className={Styles.btn + " " + Styles.back} type="button" value="Back" onClick={backClick} />}
      {currIndex < maxIndex && <input className={Styles.btn + " " + Styles.next} type="button" value="Next" onClick={nextClick} />}
      {currIndex === maxIndex && <input className={Styles.btn + " " + Styles.next} type="button" value="Confirm" onClick={confirmClick} />}
    </div>
  )
}
NavigationBar.defaultProps = defaultProps

export default NavigationBar
