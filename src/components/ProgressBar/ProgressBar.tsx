import React from "react"
import Styles from "./ProgressBar.module.css"

type Item = {
  title: string;
  icon: string;
}

type ProgressBarProps = {
  index: number;
  stages: Array<Item>;
}

const defaultProps = {}

const ProgressBar = (props: ProgressBarProps & typeof defaultProps) => {
  const { index, stages } = props

  const progressBar = document.querySelector("#progressBarLine") as HTMLElement | null
  if (progressBar !== null) {
    progressBar.style.width = ((index + 1) * (100 / stages.length)).toFixed(1) + "%"
  }

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>{stages[index].title}</h1>
      <div className={Styles.content}>
        <div className={Styles.progress}>
          <div className={Styles.line} id="progressBarLine"></div>
        </div>
        <div className={Styles.stages}>
          {stages.map((el, i) => {
            return (
              <div className={Styles.item + " " + (index < i ? Styles.stage : index === i ? Styles.stageActive : Styles.stageDone )} key={i}>
                <img className={Styles.icon} src={el.icon} alt="" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
ProgressBar.defaultProps = defaultProps

export default ProgressBar
