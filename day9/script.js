//Task1

document.getElementById("title").innerHTML = "Hello World This is not TargetX25..."

//Task2
let subheading = document.getElementById("subheading")
// subheading.style.background = "red"

//Task3
let newDiv = document.createElement("div")
newDiv.innerHTML = "<h2> This is another subheading </h2>"
document.body.appendChild(newDiv)


//Task4
let newlist = document.createElement("li")
let ul = document.getElementsByTagName("ul")[0]
newlist.innerHTML = "nothing"
ul.appendChild(newlist)

//Task5
let theOne = document.querySelector("div")
theOne.remove()

// Task6
let theOne2 = document.querySelector("ul")
theOne2.lastChild.remove()

//Task7
let link = document.querySelector("a")
link.setAttribute("href", "https://www.facebook.com")

//Task8

let piece = document.getElementById("title")


piece.classList.add("aliceblue")

let another = document.querySelector("ul")
another.classList.remove("red")

//Task9

function clicked(){
    document.getElementsByClassName("content")[0].innerHTML = "Its gone like Thanos Snapped!"
} 

//Task10
let adiv = document.getElementById("title")
adiv.addEventListener("mouseover", function(){
    adiv.style.borderColor = "red"
})


