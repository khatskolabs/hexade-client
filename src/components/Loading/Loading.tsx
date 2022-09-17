import React, { useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import { Background, Logo } from ".."
import "./Loading.css"

type LoadingProps = {
  delay?: number;
  timeout?: number;
}

const defaultProps = {
  delay: 4000,
  timeout: 1000
}

const Loading = (props: LoadingProps & typeof defaultProps) => {
  const { delay, timeout } = props

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, delay)
  })

  return (
    <CSSTransition
      in={isLoading}
      timeout={timeout}
      classNames="Loading-transition"
      unmountOnExit
    >
      <div className="Loading-container">
        <Background mode="dark-simple">
          <div className="Loading-content">
            <Logo size="big" />
            <div className="Loading-words">
              <span>l</span>
              <span>o</span>
              <span>a</span>
              <span>d</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </div>
            {/*<div className="Loading-line"></div>*/}
          </div>
        </Background>
      </div>
    </CSSTransition> 
  )
}
Loading.defaultProps = defaultProps

export default Loading
