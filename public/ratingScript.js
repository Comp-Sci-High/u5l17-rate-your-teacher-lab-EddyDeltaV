const { object } = require("webidl-conversions")

// Add an event listener to the form that upon submits creates a new rating
const form = document.querySelector("form")
form.addEventListener("submit", async (e)=>{
e.preventDefault()
const formData = new FormData(form)
const reqBody = Object.fromEntries(formData)
const response = await fetch("/add/rating", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reqBody),
 
  });
const data = await response.json()
console.log(data)
window.location.href = "/"
})
// When the rating is created redirect to the ratings page
