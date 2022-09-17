import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { Loading, Background, Copyright } from "../../components"
import Styles from "./Home.module.css"

const Home = () => {
  return (
    <Fragment>
      <Loading />
      <div className={Styles.container}>
        <Background mode="dark">
          <h1 className={Styles.title}>Home</h1>
          <div className={Styles.links}>
            <Link className={Styles.link} to="/create-order">Create order</Link>
            <Link className={Styles.link} to="/check-order">Check order</Link>
          </div>
          <Copyright />
        </Background>
      </div>
    </Fragment>
  )
}

export default Home
