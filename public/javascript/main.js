// darkmode 
let darkmode = document.querySelector("#darkMode")
let allElems = document.body.querySelectorAll("*")
darkmode.addEventListener("click", function() {
    for(let i = 0 ; i < allElems.length ; i++ ) { 
        if(allElems[i].classList.contains('nodark')) {
            continue 
        }
        else {
            allElems[i].classList.toggle("dark-mode")
        }
    }
})
// addToFavorite 
let allCircles = document.querySelectorAll(".circle") 

allCircles.forEach(function(circle) {
    circle.addEventListener("click", function() { 
        this.classList.toggle('red-select')
    })
})
// addToCart. 
let allCounters = document.querySelectorAll(".count") 

allCounters.forEach(function(counter) {
    counter.addEventListener("click", function(e){
        if(e.target.textContent === "+") {
            e.target.previousElementSibling.textContent = parseInt(e.target.previousElementSibling.textContent) + 1
         }
         else if(e.target.textContent === "-" && parseInt(e.target.nextElementSibling.textContent) > 0 ) {
            e.target.nextElementSibling.textContent = parseInt(e.target.nextElementSibling.textContent) - 1
         }
    })
})
// Modal 
let user = document.querySelector("#user") 
let modal = document.querySelector(".modal")
user.addEventListener('click', function() {
    modal.classList.add('modal-appear')
    document.body.classList.add('bodyOnModal')
})
let closeModal = document.querySelector("#modalClose")

closeModal.addEventListener("click", function() {
    modal.classList.toggle("modal-appear")
    document.body.classList.toggle('bodyOnModal')
})