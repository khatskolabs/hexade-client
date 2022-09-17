import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { Loading, Background, Copyright } from "../../components"
import Styles from "./PrivacyPolicy.module.css"

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <Loading />
      <div className={Styles.container}>
        <Background mode="dark">
          <label className={Styles.title}>Privacy Policy</label>
          <Copyright />
        </Background>
      </div>
    </Fragment>
  )
}

export default PrivacyPolicy
