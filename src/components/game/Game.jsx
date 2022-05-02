import { useEffect } from "react"


import Board from "../board/Board"
import KeyBoard from "../keyboard/KeyBoard"
import usePlay from "../../hooks/usePlay"

import "./Game.css"
const Game = () => {
    const {handleSetCurrentWord } = usePlay()

    useEffect(() => {
        window.addEventListener("keydown", handleSetCurrentWord)
        return ()=>window.removeEventListener("keydown",handleSetCurrentWord)
    }, [handleSetCurrentWord])

    return (
        <main className="">
            <section className="mainContent">
                <h1 className="gameTitle">Wordle</h1>
                <Board />
                <KeyBoard />
            </section>
        </main>
    )
}

export default Game