// Add an event listener to the form that upon submits creates a new teacher
const form = document.querySelector("form")

form.addEventListener("submit", async (e)=>{
e.preventDefault()
const formData = new FormData(form)
const reqBody = Object.fromEntries(formData)
const response = await fetch("/add/teacher", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reqBody),
 
  });
const data = await response.json()
console.log(data)
window.location.href = "/"
})


// When the teacher is created redirect to the teachers page
