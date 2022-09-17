import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { Loading, Background, Copyright } from "../../components"
import Styles from "./CheckOrder.module.css"

const CheckOrder = () => {
  return (
    <Fragment>
      <Loading />
      <div className={Styles.container}>
        <Background mode="dark">
          <label className={Styles.title}>Check Order</label>
          <Copyright />
        </Background>
      </div>
    </Fragment>
  )
}

export default CheckOrder
