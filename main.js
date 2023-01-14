const endDate = new Date("01/22/2023 00:00:00").getTime()
checkTime = setInterval(() => {
    const now = new Date().getTime()
    const distant = endDate - now
    const days = Math.floor(distant / 86400000)
    const hours = Math.floor((distant%86400000) /  3600000)
    const minutes = Math.floor((distant%3600000) / 60000)
    const seconds = Math.floor((distant%60000) / 1000)

    document.getElementById("day").innerText = days
    document.getElementById("hour").innerText = hours
    document.getElementById("minute").innerText = minutes
    document.getElementById("second").innerText = seconds
    
    if (distant === 0) clearInterval()
}, 1000)

const container = document.querySelector(".container")
let count = 50

for (let index = 0; index < count; index++) {
    let flowerWidth = Math.floor(Math.random() * 60)
    const flowerEle = document.createElement("div")
    flowerEle.classList.add("flower")
    // flowerEle.style.top = Math.floor(Math.random() * (container.clientHeight/2)) + "px"
    flowerEle.style.left = Math.floor(Math.random() * container.clientWidth) + "px"
    flowerEle.style.width = flowerWidth + "px"
    flowerEle.style.height = flowerWidth + "px"
    flowerEle.style.animationDuration = Math.floor(Math.random() * 5) + 5 + "s"

    container.appendChild(flowerEle)
}