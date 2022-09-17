import React from "react"
import Styles from "./ListBox.module.css"

type ListBoxItem = {
  id: string;
  icon: string;
}

type ListBoxProps = {
  select: string;
  list: Array<ListBoxItem>;
  description?: string;
  handleClick: (v: string) => void;
}

const defaultProps = {
  description: "Some description..."
}

const ListBox = (props: ListBoxProps & typeof defaultProps) => {
  const { select, list, description, handleClick } = props

  return (
    <div className={Styles.container}>
      <div className={Styles.list}>
        {list.map((el, i) => {
          return (
            <div
              className={Styles.box + " " + (el.id === select ? Styles.itemActive : Styles.item)}
              onClick={() => handleClick(el.id)}
              key={i}
            >
              <img className={Styles.icon} src={el.icon} alt="" />
              <label className={Styles.id}>{el.id}</label>
            </div>
          )
        })}
      </div>
      <label className={Styles.description}>{description}</label>
    </div>
  )
}
ListBox.defaultProps = defaultProps

export default ListBox
