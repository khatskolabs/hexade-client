import React, { Fragment } from "react"
import { Loading, Logo, Background } from "../../components"
import Styles from "./NotFound.module.css"

const NotFound = () => {
  const title = "Not Found"
  const text = "The index before which to end the extraction (numbering starts from zero). The character at this index will not be included. If endIndex is omitted, or is undefined, or greater than str.length, slice() will extract everything up to the end of the string."

  return (
    <Fragment>
      <Loading />
      <div className={Styles.container}>
        <Background mode="dark">
          <div className={Styles.logoBox}>
            <Logo />
          </div>
          <div className={Styles.content}>
            <h1 className={Styles.title}>{title}</h1>
            <p className={Styles.text}>{text}</p>
            <a className={Styles.link} href="/">Back to home</a>
          </div>
        </Background>
      </div>
    </Fragment>
  )
}

export default NotFound
