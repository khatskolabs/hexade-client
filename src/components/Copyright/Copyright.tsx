import React from "react"
import { Link } from "react-router-dom"
import Styles from "./Copyright.module.css"

type CopyrightProps = {
  text?: string;
  to?: string;
  link?: string;
}

const defaultProps = {
  text: "Copyright © 2022 Khatsko Labs. All rights reserved.",
  to: "Privacy Policy",
  link: "/privacy-policy"
}

const Copyright = (props: CopyrightProps & typeof defaultProps) => {
  const { text, to, link } = props

  return (
    <label className={Styles.text}>{text} <Link className={Styles.link} to={link}>{to}</Link>.</label>
  )
}
Copyright.defaultProps = defaultProps

export default Copyright
