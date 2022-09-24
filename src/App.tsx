import React, { Fragment } from "react"
import { BrowserView, MobileView } from "react-device-detect"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ForMobile } from "./pages"
import routes from "./routes"
import "./App.css"

const App = () => {
  return (
    <Fragment>
      <MobileView>
        <ForMobile />
      </MobileView>
      <BrowserView>
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, element }, index) => {
              return <Route key={index} path={path} element={element} />
            })}
          </Routes>
        </BrowserRouter>
      </BrowserView>
    </Fragment>
  )
}

export default App
