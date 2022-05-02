import { createContext, useEffect, useState } from "react";
import words from "../api/Words";
const PlayContext = createContext();

const PlayProvider = ({ children }) => {

    const [word, setWord] = useState("");
    const lettersKeyBoard = [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", "z"],
        ["enter", "x", "c", "v", "b", "n", "m", "delete"]
    ]
    const letters = [
        "q", "w", "e", "r", "t",
        "y", "u", "i", "o", "p",
        "a", "s", "d", "f", "g",
        "h", "j", "k", "l", "z",
        "x", "c", "v", "b", "n", "m"]

    const [rows, setRows] = useState(
        [
            { row: 1, boxes: ["", "", "", "", ""] },
            { row: 2, boxes: ["", "", "", "", ""] },
            { row: 3, boxes: ["", "", "", "", ""] },
            { row: 4, boxes: ["", "", "", "", ""] },
            { row: 5, boxes: ["", "", "", "", ""] },
            { row: 6, boxes: ["", "", "", "", ""] }
        ]
    );
    const [turn, setTurn] = useState(1);

    const [game, setGame] = useState(false);


    const handleSetCurrentWord = (e) => {
        const letter = e.key.toLowerCase();

        if (letters.includes(letter)) {
            const row = { ...rows[turn - 1] };

            const boxes = [...row.boxes];

            if (boxes.includes("")) {
                const letterObj = { letter, state: "" }
                const wordArray = word.split("")
                if (wordArray.includes(letter)) {
                    if (wordArray[boxes.indexOf("")] == letter) {
                        letterObj.state = "exact"
                    } else {
                        letterObj.state = "exist"
                    }
                } else {
                    letterObj.state = "no"
                }

                boxes[boxes.indexOf("")] = letterObj;
                row.boxes = boxes;

                const newRows = rows.map(rowItem => rowItem.row == turn ? row : rowItem);
                setRows(newRows)
                const finished = checkGame(row)
                setGame(finished)

            }

        }
        if (letter == "enter") {
            if (!game) {
                if (turn < 6) {
                    const row = { ...rows[turn - 1] };
                    const boxes = [...row.boxes];
                    if (!boxes.includes("")) {

                        setTurn(turn + 1);

                    }
                }else{
                    setGame(true)
                }
            }

        }
    }

    const getWord = async () => {
        const randomWord = words[parseInt(Math.random() * 15)].toLowerCase();
        setWord(randomWord)
    }

    const checkGame = (rowCurrent) => {
        let notFinished = true;
        const boxes = [...rowCurrent.boxes];

        for (let i = 0; i < boxes.length; i++) {
            const letter = boxes[i];
            if (letter?.state != "exact") {
                notFinished = false;
                break;
            }

        }



        return notFinished

    }
    useEffect(() => {
        getWord()
    }, [])


    return (
        <PlayContext.Provider
            value={{
                lettersKeyBoard,
                turn,
                rows,
                word,
                game,
                handleSetCurrentWord

            }}
        >
            {children}
        </PlayContext.Provider>
    )
}

export { PlayProvider }
export default PlayContext;