let registry = document.createElement("section")
registry.id = "reg"
registry.className = "register"
registry.innerHTML = "<div><h1>Student Registry</h1></div>"
let logo = registry.querySelector("div")
logo.className = "logo"
let logoh = registry.querySelector("h1")
logoh.className = "logoh1"
document.body.appendChild(registry)
let studentRegistry = [
    {
        name: "Adegoke Fidelis", class: "Jss1", score: 67
    },
    {
        name: "George Stefan", class: "Jss3", score: 35
    },
    {
        name: "Mallam Ibrahim", class: "Jss1", score: 64
    },
    {
        name: "Enejo Ruth", class: "Jss1", score: 78
    },
    {
        name: "Paulo Ishola", class: "Jss2", score: 59
    },
    {
        name: "Evian Princessa", class: "Jss2", score: 94
    },
    {
        name: "Ibe Fredrick", class: "Jss3", score: 48
    },
    {
        name: "Plang Musa", class: "Jss3", score: 53
    }
]
let main = document.createElement("div")
main.id = "main-cont"
main.className = "main-div"
let regHTML = "<table><tr><th>StudentId</th><th>name</th><th>class</th><th>score</th></tr>"
let id = 1
let jss1 = []
let jss2 = []
let jss3 = []
studentRegistry.forEach((student, index) => {
    regHTML += `<tr><td>${id++}</td><td>${student.name}</td><td>${student.class}</td><td>${student.score}</td></tr>`
}
)
regHTML += '</table>'
main.innerHTML = regHTML
document.body.appendChild(main)
for (student of studentRegistry){
if (student.class === "Jss1"){
    jss1.push(student)
} else if(student.class === "Jss2"){
    jss2.push(student)
} else {
    jss3.push(student)
}
}
let studentClassList = document.createElement("div")
studentClassList.id = "class-list"
studentClassList.className = "clas-li"
let jss1Div = document.createElement("div")
jss1Div.innerHTML = "<h3>JSS1 Students</h3><ul>"
for (let i = 0; i < jss1.length; i++) {
jss1Div.innerHTML += `<li>${jss1[i].name} - ${jss1[i].score}</li>`
}
jss1Div.innerHTML += "</ul>"

let jss2Div = document.createElement("div")
jss2Div.innerHTML = "<h3>JSS2 Students</h3><ul>"
for (let i = 0; i < jss2.length; i++) {
jss2Div.innerHTML += `<li>${jss2[i].name} - ${jss2[i].score}</li>`
}
jss2Div.innerHTML += "</ul>"

let jss3Div = document.createElement("div")
jss3Div.innerHTML = "<h3>JSS3 Students</h3><ul>"
for (let i = 0; i < jss3.length; i++) {
jss3Div.innerHTML += `<li>${jss3[i].name} - ${jss3[i].score}</li>`
}
jss3Div.innerHTML += "</ul>"

studentClassList.appendChild(jss1Div)
studentClassList.appendChild(jss2Div)
studentClassList.appendChild(jss3Div)

document.body.appendChild(studentClassList)

let myLink = document.createElement("footer")
myLink.innerHTML = `<a href="https://github.com/Unique-Ikeoluwa/task4/commit/f88096e2ae34f687970f12d4c4a00db1b91e20b0">Githublink</a>`
document.body.appendChild(myLink)