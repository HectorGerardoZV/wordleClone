
import Game from "./components/game/Game"
import { PlayProvider } from "./context/PlayProvider"


function App() {

  return (
    <PlayProvider>
      <Game />
    </PlayProvider>
  )
}

export default App
