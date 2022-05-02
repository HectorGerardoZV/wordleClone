
import Box from "../box/Box"
import { useId } from "react"
import usePlay from "../../hooks/usePlay"

import "./Row.css"
const Row = (props) => {
    const { row } = props;
    const { boxes } = row;


    return (
        <div className="rowStyle">
            {
                boxes.map(box => (
                    <Box
                        key={useId()}
                        box={box}
                    />
                ))
            }
        </div>
    )
}

export default Row