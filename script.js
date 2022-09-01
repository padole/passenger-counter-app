//let LapCompleted = 0

//function incrementLap(){
//    LapCompleted = LapCompleted + 1
//}

//incrementLap()
//incrementLap()
//incrementLap()
//incrementLap()

//console.log(LapCompleted)
let SaveEl = document.getElementById("save-el")
let CountEL = document.getElementById("count-el")

let count = 0

function increment(){
    count = count + 1
    CountEL.innerText = count
    
}


function save(){
    let CountStr = count + " - "
    SaveEl.textContent += CountStr
    CountEL.textContent = 0
    count = 0
}

