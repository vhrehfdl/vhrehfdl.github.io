import { useEffect, useRef } from "react"

const Y_SPEED = 0.3
const Y_SPEED_VARIANCE = 0.5

const SWAY_AMPLITUDE = 0.8

class Bubble {
  x: number
  y: number
  r: number = 0
  opacity: number = 0
  ySpeed: number = 0
  sway: number = 0
  swaySpeed: number = 0
  hueShift: number = 0

  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D,
  ) {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height

    this.initialize()
  }

  initialize() {
    this.r = 6 + Math.random() * 22
    this.opacity = 0.35 + Math.random() * 0.4
    this.ySpeed = Y_SPEED + Math.random() * Y_SPEED_VARIANCE
    this.sway = Math.random() * Math.PI * 2
    this.swaySpeed = 0.008 + Math.random() * 0.02
    this.hueShift = Math.random() * 20 - 10
  }

  draw() {
    if (this.y + this.r < 0) {
      this.initialize()
      this.x = Math.random() * this.canvas.width
      this.y = this.canvas.height + this.r
    }

    const ctx = this.ctx
    ctx.save()
    ctx.globalAlpha = this.opacity

    const gradient = ctx.createRadialGradient(
      this.x - this.r * 0.3,
      this.y - this.r * 0.3,
      this.r * 0.1,
      this.x,
      this.y,
      this.r,
    )
    const hue = 200 + this.hueShift
    gradient.addColorStop(0, `hsla(${hue}, 70%, 95%, 0.9)`)
    gradient.addColorStop(0.6, `hsla(${hue}, 60%, 75%, 0.4)`)
    gradient.addColorStop(1, `hsla(${hue}, 55%, 60%, 0.15)`)

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    ctx.fill()

    ctx.strokeStyle = `hsla(${hue}, 60%, 70%, 0.5)`
    ctx.lineWidth = 1
    ctx.stroke()

    ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
    ctx.beginPath()
    ctx.arc(
      this.x - this.r * 0.35,
      this.y - this.r * 0.35,
      this.r * 0.18,
      0,
      Math.PI * 2,
    )
    ctx.fill()

    ctx.restore()
  }

  animate() {
    this.sway += this.swaySpeed
    this.x += Math.sin(this.sway) * SWAY_AMPLITUDE
    this.y -= this.ySpeed
    this.draw()
  }
}

export const BGEffect = () => {
  const ref = useRef<HTMLCanvasElement>({} as HTMLCanvasElement)

  const bubblesRef = useRef<Bubble[]>([])

  const resizeTimeoutRef = useRef(0)
  const animationFrameIdRef = useRef(0)

  useEffect(() => {
    const canvas = ref.current

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

    const getBubbleNum = () => {
      return Math.floor((window.innerWidth * window.innerHeight) / 40000)
    }

    const initializeBubbles = () => {
      const count = getBubbleNum()
      const bubbles = []
      for (let i = 0; i < count; i++) {
        bubbles.push(new Bubble(canvas, ctx))
      }
      bubblesRef.current = bubbles
    }

    initializeBubbles()

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      bubblesRef.current.forEach((bubble) => bubble.animate())
      animationFrameIdRef.current = requestAnimationFrame(render)
    }

    render()

    const onResize = () => {
      clearTimeout(resizeTimeoutRef.current)
      resizeTimeoutRef.current = window.setTimeout(() => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const newBubbleNum = getBubbleNum()
        if (newBubbleNum > bubblesRef.current.length) {
          for (let i = bubblesRef.current.length; i < newBubbleNum; i++) {
            bubblesRef.current.push(new Bubble(canvas, ctx))
          }
        } else if (newBubbleNum < bubblesRef.current.length) {
          bubblesRef.current.splice(newBubbleNum)
        }
      }, 100)
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(animationFrameIdRef.current)
    }
  }, [])

  return (
    <div className="bg-effect">
      <canvas ref={ref} />
    </div>
  )
}
