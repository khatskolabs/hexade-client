import React, { FormEvent, useState } from "react"
import Styles from "./KeywordsBox.module.css"

enum StatusCode {
  Default = 0,
  Correct = 1,
  Incorrect = 2
}

type KeywordsBoxProps = {
  status?: string;
  value?: string;
  setValue: (v: string) => void;
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

const KeywordsBox = (props: KeywordsBoxProps & typeof defaultProps) => {
  const { status, value, setValue, placeholder, description, handleChange, handleCorrect } = props

  const [max, setMax] = useState(20)
  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState(status)

  const generate = () => {
    const keywords = "apple dog home pencin people red forest city"
    setValue(keywords)
    setCounter(counting(keywords))
  }

  const counting = (v: string) => {
    return v.split(" ").length
  }

  const onChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setCounter(counting(e.currentTarget.value))
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
        <textarea className={Styles.keywords} id="keywords" placeholder={placeholder} value={value} onChange={onChange}></textarea>
      </div>
      <div className={Styles.box}>
        <label className={Styles.counter}>{counter}/{max}</label>
        <input className={Styles.random} type="submit" value="Generate random keywords" onClick={generate} />
      </div>
      {/*<label className={Styles.description}>{description}</label>*/}
    </div>
  )
}
KeywordsBox.defaultProps = defaultProps

export default KeywordsBox
