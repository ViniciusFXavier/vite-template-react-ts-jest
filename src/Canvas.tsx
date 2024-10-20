import React, { useRef, useEffect } from "react"

export type CanvasProps = {
  drawOnCanvas: (ctx: CanvasRenderingContext2D) => void
  attributes?: React.CanvasHTMLAttributes<HTMLCanvasElement>
}

const Canvas = ({ drawOnCanvas, attributes }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")

    if (!context) return

    let animationFrameId: number
    const render = () => {
      drawOnCanvas(context)
      animationFrameId = requestAnimationFrame(render)
    }

    render()
  }, [drawOnCanvas])

  return <canvas ref={canvasRef} {...attributes} />
}

export default Canvas
