let homeScore = 0
let guestScore = 0

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function addOne(){
    //console.log(homeEl)
    homeScore += 1
    homeEl.textContent = homeScore
}

function addTwo(){
    //console.log(homeEl)
    homeScore += 2
    homeEl.textContent = homeScore
}

function addThree(){
    //console.log(homeEl)
    homeScore += 3
    homeEl.textContent = homeScore
}

function addOneg(){
    //console.log(homeEl)
    guestScore += 1
    guestEl.textContent = guestScore
}

function addTwog(){
    //console.log(homeEl)
    guestScore += 2
    guestEl.textContent = guestScore
}

function addThreeg(){
    //console.log(homeEl)
    guestScore += 3
    guestEl.textContent = guestScore
}