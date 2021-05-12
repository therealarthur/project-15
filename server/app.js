// Loads app server using express.
const express = require('express')
const morgan = require('morgan')
const app = express()


app.use(morgan('combined'))

app.get("/", (req,res) => {
    console.log("responding to root route")
    res.send("Hello from root")
})

app.get("/users", (req,res) => {
    // console.log("refreshing")
    // res.send("refreshing")
    var user1 = {firstName: "Bob", lastName: "Blue"}
    var user2 = {firstName: "Dig", lastName: "Johnson"}
    res.json([user1,user2])
})

app.listen()

//localhost:6969
app.listen(6969, () => {
    console.log("Server is up and listening on 6969...")
})