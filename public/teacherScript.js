// Add an event listener to the form that upon submits creates a new teacher
const { object } = require("webidl-conversions")


const form = document.querySelector("form")
form.addEventListener("submit", async(e)=>{
    e.preventDefault()
    const teacherData = new FormData(form)
    const reqBody = object.fromEntries(teacherData)
    const response = await fetch("/add/teacher",{
       method:"POST",
       headers:{
        "content-Type":"application/Json"
       },
       body:JSON.stringify(reqBody)
    })
    const data = await response.json()
    console.log(data)
})
// When the teacher is created redirect to the teachers page
