import { useId } from "react"

import usePlay from "../../hooks/usePlay"


import "./KeyBoard.css"
const KeyBoard = () => {

  const { lettersKeyBoard, rows, turn } = usePlay()
  const line = rows[turn - 1];
  const boxes = [...line.boxes]
  const newKeyBoard = lettersKeyBoard.map(array => {

    return array.map(letter => {
      const letterObj = {
        letter,
        state: ""
      }
      const pos = boxes.indexOf("") - 1;
      const item = boxes[pos]?.letter != undefined ? boxes[pos]?.letter : "";
      if (item !== "") {
        if (letter == item) {
          letterObj.state = boxes[pos]?.state
        }
      }

      return letterObj;
    })
  })

  return (
    <div className="keyboardStyle">
      {
        newKeyBoard.map(row => (
          <div className="rowLetters" key={useId()}>
            {
              row.map(letter => (
                <button className={`key ${letter?.state}`} key={letter.letter}>
                  {letter.letter.toUpperCase()}
                </button>
              ))
            }
          </div>
        ))
      }

    </div>
  )
}

export default KeyBoard