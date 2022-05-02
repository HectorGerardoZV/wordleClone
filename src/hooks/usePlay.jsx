import { useContext } from "react"
import PlayContext from "../context/PlayProvider"


const usePlay = () => {
  return useContext(PlayContext)
}

export default usePlay