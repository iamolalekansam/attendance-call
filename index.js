let countEl = document.getElementById("count-el")

let count = 0
function increment ( ) {
    count += 1
    countEl.textContent = count
}

// function save() {
//     save(count)
// }
// save()

let saveEl = document.getElementById("save-el")
 function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

// countStr()

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Sam "
// let greeting = "Good morning"

// welcomeEl.innerText = name + greeting
// welcomeEl.innerText += " it is a beautiful sunday" 

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count




