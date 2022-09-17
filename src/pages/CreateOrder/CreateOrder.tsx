import React, { Fragment, ReactNode, useState } from "react"
import { Link } from "react-router-dom"
import { Loading, Background, ProgressBar, NavigationBar, ManagerBox, ListBox, InputBox, KeywordsBox, InfoBox, Copyright } from "../../components"
import { HexIcon, HashIcon, MailIcon, EmailIcon, BitcoinIcon, EthereumIcon, ChainIcon, DataIcon, CheckIcon } from "../../assets/images"
import { OrdersApi } from "../../api"
import Styles from "./CreateOrder.module.css"

enum StatusCode {
  Default = 0,
  Correct = 1,
  Incorrect = 2
}

type Box = {
  title: string;
  icon: string;
  // status: StatusCode;
  element: ReactNode;
}

const makeListBox = (blockchain: string, setBlockchain: (v: string) => void): Box => {
  const title = "Which blockchain to create an address for?"

  const list = [
    {
      id: "bitcoin",
      icon: BitcoinIcon
    },
    {
      id: "ethereum",
      icon: EthereumIcon
    }
  ]

  const description = "W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning."

  const res: Box = {
    title: title,
    icon: ChainIcon,
    // status: StatusCode.Default,
    element: <ListBox
      list={list}
      select={blockchain}
      description={description}
      handleClick={v => setBlockchain(v)}
    />
  }

  return res
}

const makeAddressBox = (blockchain: string, address: string, setAddress: (v: string) => void): Box => {
  const title = "What type of address do you want to receive?"
  const placeholder = "0xfdsghfdgh..."
  const description = "W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning."

  const handleCorrect = (v: string): [StatusCode, string] => {
    if (blockchain === "bitcoin") {
    } else if (blockchain === "ethereum") {
      if (/^0x[0-9a-zA-Z]{1,6}$/.test(v)) {
        return [StatusCode.Correct, "Correct"]
      }
    }
    return [StatusCode.Incorrect, "Incorrect"]
  }

  // const [status, setStatus] = useState(status.Default)

  const res: Box = {
    title: title,
    icon: HashIcon,
    // status: StatusCode.Default,
    element: <InputBox
      // status={status}
      // setStatus={setStatus}
      icon={HexIcon}
      placeholder={placeholder}
      value={address}
      description={description}
      handleChange={v => setAddress(v)}
      handleCorrect={handleCorrect}
    />
  }

  return res
}

const makeKeywordsBox = (keywords: string, setKeywords: (v: string) => void): Box => {
  const title = "Write a couple of words to create an address."
  const placeholder = "Schools is optimized for learning and training ..."
  const description = "Schools is optimized for learning and training. Examples might be simplified to improve reading and learning."

  const handleCorrect = (v: string): [StatusCode, string] => {
    if (/^[\s,0-9a-zA-Z]+$/.test(v)) {
      return [StatusCode.Correct, "Correct"]
    }
    return [StatusCode.Incorrect, "Incorrect"]
  }

  const res: Box = {
    title: title,
    icon: DataIcon,
    element: <KeywordsBox
      placeholder={placeholder}
      value={keywords}
      setValue={setKeywords}
      description={description}
      handleChange={v => setKeywords(v)}
      handleCorrect={handleCorrect}
    />
  }

  return res
}

const makeEmailBox = (email: string, setEmail: (v: string) => void): Box => {
  const title = "Give your e-mail to which we will send the result"
  const placeholder = "Email"
  const description = "Schools is optimized for learning and training. Examples might be simplified to improve reading and learning."

  const handleCorrect = (v: string): [StatusCode, string] => {
    if (/^[.0-9a-zA-Z]{2,}@[0-9a-zA-Z]{3,}[.][0-9a-zA-Z]{2,}$/.test(v)) {
      return [StatusCode.Correct, "Correct"]
    } else if (!/^[.0-9a-zA-Z]{2,}/.test(v)) {
      return [StatusCode.Incorrect, "Incorrect min 2"]
    } else if (!/@/.test(v)) {
      return [StatusCode.Incorrect, "Incorrect @"]
    } else if (!/^[.0-9a-zA-Z]{2,}@[0-9a-zA-Z]{3,}/.test(v)) {
      return [StatusCode.Incorrect, "Incorrect min 3"]
    }
    return [StatusCode.Incorrect, "Incorrect min 3"]
  }

  const res: Box = {
    title: title,
    icon: MailIcon,
    element: <InputBox
      icon={EmailIcon}
      placeholder={placeholder}
      value={email}
      description={description}
      handleChange={v => setEmail(v)}
      handleCorrect={handleCorrect}
    />
  }

  return res
}

const makeInfoBox = (blockchain: string, address: string, keywords: string, email: string): Box => {
  const title = "Give your e-mail to which we will send the result"

  const res: Box = {
    title: title,
    icon: CheckIcon,
    element: <InfoBox>
      <p>Which blockchain to create an
      <b>0xapplegfgf</b>. Which blockchain to create an <b>nazar.khatsko@gmail.com</b>
      for? Which blockchain to create an. Which blockchain to create an <b>5 Jun 2021</b>.
        <a>fsdfsdds</a></p>
    </InfoBox>
  }

  return res
}

const CreateOrder = () => {
  const [index, setIndex] = useState(0)
  const [blockchain, setBlockchain] = useState("bitcoin")
  const [address, setAddress] = useState("")
  const [keywords, setKeywords] = useState("")
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const boxes = [
    makeListBox(blockchain, setBlockchain),
    makeAddressBox(blockchain, address, setAddress),
    makeKeywordsBox(keywords, setKeywords),
    makeEmailBox(email, setEmail),
    makeInfoBox(blockchain, address, keywords, email)
  ]

  const backClick = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  const nextClick = () => {
    if (
      (index === 1 && address === "") ||
      (index === 2 && keywords === "") ||
      (index === 3 && email === "")
    ) return


    if (index < boxes.length -1) {
      setIndex(index + 1)
    }
  }

  const confirmClick = () => {
    OrdersApi.create(blockchain, address, keywords, email)
    setDone(true)
  }

  const resetClick = () => {
    setIndex(0)
    setBlockchain("bitcoin")
    setAddress("")
    setKeywords("")
    setEmail("")
    setDone(false)
  }

  return (
    <Fragment>
      <Loading />
      <div className={Styles.container}>
        <Background mode="dark">
          {!done && <>
            <ProgressBar
              index={index}
              stages={boxes.map(el => { return { title: el.title, icon: el.icon } })}
            />
            <ManagerBox
              index={index}
              boxes={boxes.map(el => el.element)}
            />
            <NavigationBar
              currIndex={index}
              minIndex={0}
              maxIndex={boxes.length - 1}
              backClick={backClick}
              nextClick={nextClick}
              confirmClick={confirmClick}
            />
          </>}
          {done && <div className={Styles.done}>
            <div className={Styles.info}>
              <label className={Styles.title}>Done</label>
              <label className={Styles.text}>The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address </label>
            </div>
            <div className={Styles.links}>
              <input className={Styles.createOrder} type="button" value="Create another order" onClick={resetClick} />
              <Link className={Styles.goHome} to="/">Go to home page</Link>
            </div>
          </div>}
          <Copyright />
        </Background>
      </div>
    </Fragment>
  )
}

export default CreateOrder
