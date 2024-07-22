
document.querySelector("div > button").addEventListener("click",Onclick)
function Onclick(){
    document.querySelector("div > p").innerHTML = "<h1>Gone..Poof!"


}

//Task2
document.querySelector("div > img").addEventListener("dblclick", poof)

function poof(){
    document.querySelector("div > img").classList.add("poof")
}

//Task3
document.querySelector("div > p").addEventListener("mouseover", function(event) {
   
        event.target.style.background = "red";
        event.target.style.color = "white";
    
});

//Task4

document.querySelector("div > p").addEventListener("mouseout", function(event) {

        event.target.style.background = "lightblue";
        event.target.style.color = "black";
    
});

//Task5

document.querySelector("div > input").addEventListener("keydown", function(e){
    console.log(e.key)
})

//Task6
document.querySelector("div > input").addEventListener("keyup", function(e){
    let input = e.target.value
    document.querySelector(".stuff").textContent = input

})

//Task 7
document.querySelector("div> form > button").addEventListener("click", function(e){
    e.preventDefault()
    let value = document.querySelector("div> form > input").value 
    console.log(value)
})

//Task 8


