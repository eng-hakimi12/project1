let tasbih = document.querySelector("#tasbihbtn")
let incrementbutton = document.querySelector("#incrementbtn")
let resetbutton = document.querySelector("#resetbtn")
let decreastbutton = document.querySelector("#decreasbtn")



let initialvalue = 0


incrementbutton.addEventListener("click" , function(){
    initialvalue++
    tasbih.innerHTML = initialvalue

    if(initialvalue ==4){
        document.body.style.backgroundColor = "red"
}
        else if (initialvalue ==5) {
    document.body.style.backgroundColor = "blue"
}
        else if (initialvalue ==6) {
    document.body.style.backgroundColor = "green"
}
        else if (initialvalue ==7) {
    document.body.style.backgroundColor = "orange"
}
        else if (initialvalue ==8) {
    document.body.style.backgroundColor = "yellow"
}
        else if (initialvalue ==9) {
    document.body.style.backgroundColor = ""
}
    
})


resetbutton.addEventListener("click", function(){
    initialvalue =0
    tasbih.innerHTML = initialvalue
})


decreasbutton.addEventListener("click" , function(){
    initialvalue>0
    tasbih.innerHTML = initialvalue
    
})


