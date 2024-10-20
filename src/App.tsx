import { useEffect, useState } from 'react'
import './App.scss'

import Game, { GameProps } from "./Game"

function App () {
  const [gameSize, setGameSize] = useState<GameProps>({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    const handleResize = () => {
      setGameSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    setGameSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Game {...gameSize}/>
    </div>
  )
}

export default App
