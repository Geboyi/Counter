let count = 0
let count_ = document.getElementById("counts")
let save_ = document.getElementById("entries")

function increment(){
    count += 1
    count_.textContent = count
}

function save(){
    let countStr = count + " - "
    save_.textContent += countStr
    count_.textContent = 0
    count = 0
}
