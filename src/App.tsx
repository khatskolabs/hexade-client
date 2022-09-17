import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import routes from "./routes"
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => {
          return <Route key={index} path={path} element={element} />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
