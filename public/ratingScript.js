const { object } = require("webidl-conversions")

// Add an event listener to the form that upon submits creates a new rating
const form = document.querySelector("form")
form.addEventListener("submit", async(e)=>{
    e.preventDefault()
    const teacherData = new FormData(form)
    const reqBody = object.fromEntries(teacherData)
    const response = await fetch("/add/rating",{
       method:"POST",
       headers:{
        "content-Type":"application/Json"
       },
       body:JSON.stringify(reqBody)
    })
    const data = await response.json()
    console.log(data)
})
// When the rating is created redirect to the ratings page
