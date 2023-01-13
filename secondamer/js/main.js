let startBtn = document.querySelector('#StartBtn')
let stopBtn = document.querySelector('#StopBtn')
let intervalBtn = document.querySelector('#IntervalBtn')
let resetBtn = document.querySelector('#resetBtn')
let videoTag = document.querySelector('#video')
let audioTag = document.querySelector('#audio')
let demo = document.querySelector('#demo')
let a


startBtn.addEventListener('click', () => {
    let hour = document.querySelector('#hour')
    let minute = document.querySelector('#minute')
    let second = document.querySelector('#second')
    a = setInterval(() => {
        if (+second.innerHTML < 59) {
            second.innerHTML++
        } else if (+minute.innerHTML < 59) {
            minute.innerHTML++
            second.innerHTML = 0
        } else if (hour.innerHTML < 59) {
            hour.innerHTML++
            minute.innerHTML = 0
            second.innerHTML = 0
        }
    }, 1000)


    videoTag.play()
    audioTag.play()
})

stopBtn.addEventListener('click', () => {
    clearInterval(a)
    videoTag.pause()
    audioTag.pause()
})

intervalBtn.addEventListener('click', ()=>{
    let hour = document.querySelector('#hour')
    let minute = document.querySelector('#minute')
    let second = document.querySelector('#second')
    demo.innerHTML = demo.innerHTML + `<h3>${hour.innerHTML} : ${minute.innerHTML} : ${second.innerHTML}</h3>`
})


resetBtn.addEventListener('click', ()=> {
    clearInterval(a)
    videoTag.pause()
    audioTag.pause()
})