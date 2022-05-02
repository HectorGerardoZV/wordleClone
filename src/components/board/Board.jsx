import usePlay from "../../hooks/usePlay"

import Row from "../row/Row"

import "./Board.css"
const Board = () => {
  const { rows,game } = usePlay();
  return (
    <div className="boardStyle">
      <h2 className="titleState">{game? "Finish": "Playing"}</h2>
      {
        rows.map(row => (
          <Row
            key={row.row}
            row={row}
          />
        ))
      }

    </div>
  )
}

export default Board