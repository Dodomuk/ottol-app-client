<template>
    <div class="money-container"><canvas class="rain" id="rain"></canvas></div>
</template>
<script setup lang="ts">
import _ from 'lodash'
import { onMounted } from 'vue'

interface Money {
    image: HTMLImageElement
    x: number
    y: number
    angle: number
    speed: number
    currentFrame: number
    direction: number
}

let width = 0
let height = 0
let imageHeight = 100
let fallingMoney: Money[] = []
let canvasContext: CanvasRenderingContext2D | null = null
let interval: number | null | undefined = null
let canvas: HTMLElement | null = null

onMounted(() => {
    pageInit()
})

function pageInit() {
    width = document.body.clientWidth ?? 0
    height = document.body.clientHeight ?? 0
    canvas = document.getElementById('rain')
    canvas?.setAttribute('width', width.toString())
    canvas?.setAttribute('height', height.toString())
    initAnimation()
}

function initAnimation() {
    const numMoney = 300
    const speedOffset = 30
    const speedRange = 5
    const frameRate = 1000 / 30 // 30 frames per second
    const animationLength = 2000 // 10 seconds
    canvasContext = (document.getElementById('rain') as HTMLCanvasElement).getContext('2d')
    _.range(numMoney).forEach((index) => {
        const isOdd = index % 2 === 1
        const direction = isOdd ? 1 : -1

        const money = {
            image: new Image(),
            x: _.random(width),
            y: _.random(-height * 1, -imageHeight),
            angle: _.random(2 * Math.PI),
            speed: speedOffset + _.random(speedRange),
            currentFrame: 0,
            direction: direction
        }
        money.image.src =
            'https://images.vexels.com/media/users/3/144032/isolated/preview/1f5414b9d04b71a4972208c035a7d278-stroke-dollar-bill-by-vexels.png'
        fallingMoney.push(money)
    })

    interval = setInterval(() => {
        draw()
    }, frameRate)

    setTimeout(() => {
        endAnimation()
    }, animationLength)
}

function draw() {
    clearWindow()
    fallingMoney.forEach((money, index) => {
        drawRotatedImage(money)
        money.currentFrame += 1
        money.y += money.speed
        money.angle += money.direction * 0.1
        const radius = money.direction * (10 + (index % 6))
        money.x += Math.sin((money.currentFrame + index) / (2 * Math.PI)) * radius
    })
}

function clearWindow() {
    canvasContext?.clearRect(0, 0, width, height)
}

function drawRotatedImage(money: Money) {
    canvasContext?.save()
    canvasContext?.translate(money.x, money.y)
    canvasContext?.rotate(money.angle)
    canvasContext?.drawImage(money.image, 0, 0, 100, (100 * money.image.height) / money.image.width)
    canvasContext?.restore()
}

function endAnimation() {
    if (interval) clearInterval(interval)
    fallingMoney = []
    if (canvas) canvas.parentElement?.removeChild(canvas) // canvas.detach()와 같은 기능
}
</script>
<style lang="scss">
.money-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    z-index: 999;
}

.rain {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.7;
}
</style>
