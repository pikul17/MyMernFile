// let division = document.querySelector("div")
// console.log(division)

// let demo = division.getAttribute("id")
// console.log(demo)

// let para = document.querySelector("p")
// console.log(para.setAttribute("class","newClass"))
// // you can set the atribute

// let div = document.querySelector("div")
// div.style.backgroundColor ="green"
// div.style.color ="yellow"
// div.style.fontSize = "20px"
// div.style.fontFamily ="monispace"
// div.innerText = "NIT COLLEGE"
//div.style.visibility = "hidden"

let newBtn = document.createElement("button")
newBtn.innerText = "click me"
console.log(newBtn)

let div = document.querySelector("div")
// div.append(newBtn)
// div.prepend(newBtn)
// div.after(newBtn)
div.before(newBtn)

div.remove(newBtn)
let para = document.querySelector("p")
para.remove()