import React, { FormEvent, useState } from "react"
import Styles from "./InputBox.module.css"

enum StatusCode {
  Default = 0,
  Correct = 1,
  Incorrect = 2
}

type InputBoxProps = {
  status?: string;
  icon: string;
  value?: string;
  placeholder?: string;
  description?: string;
  handleChange: (v: string) => void;
  handleCorrect: (v: string) => [StatusCode, string];
}

const defaultProps = {
  status: "Schools is optimized for learning",
  value: "",
  placeholder: "Enter text...",
  description: "Some description..."
}

const InputBox = (props: InputBoxProps & typeof defaultProps) => {
  const { status, icon, value, placeholder, description, handleChange, handleCorrect } = props

  const [message, setMessage] = useState(status)

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    handleChange(e.currentTarget.value)

    const [code, content] = handleCorrect(e.currentTarget.value)

    const el = document.querySelector("#message") as HTMLInputElement | null
    if (el !== null) {
      if (code === StatusCode.Default) {
        el.style.color = "#444"
      } else if (code === StatusCode.Correct) {
        el.style.color = "#005700"
      } else if (code === StatusCode.Incorrect) {
        el.style.color = "#860000"
      }

      setMessage(content)
    }
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <label className={Styles.message} id="message">{message}</label>
        <div className={Styles.box}>
          <div className={Styles.frame}>
            <img className={Styles.icon} src={icon} alt="" />
          </div>
          <input className={Styles.text} type="text" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
      </div>
      <label className={Styles.description}>{description}</label>
    </div>
  )
}
InputBox.defaultProps = defaultProps

export default InputBox
