import React, { useRef } from "react"
import Canvas from "./Canvas"

export type GameProps = {
  width: number | undefined
  height: number | undefined
}

const renderBackground = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#151d26"
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
  }

const Game = ({ width, height }: GameProps) => {
  const mouseRef = useRef({ x: -1, y: -1 })
  const startPositionRef = useRef({ x: -1, y: -1 })

  const render = (ctx: CanvasRenderingContext2D) => {
    if (!width || !height) return
    
    renderBackground(ctx)
  }

  return <Canvas drawOnCanvas={render} attributes={{ width, height }} />
}

export default Game
