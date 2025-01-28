// darkmode 
let darkmode = document.querySelector("#darkMode")
let allElems = document.body.querySelectorAll("*")
darkmode.addEventListener("click", function() {
    for(let i = 0 ; i < allElems.length ; i++ ) { 
        if(allElems[i].classList.contains('nodark')) {
            console.log('do nothing')
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
        this.childNodes.toggle('red-select')
        this.childNodes.childNodes.toggle('red-select')
    })
})
// addToCart. 

