/* 
Set up the path for the root /
Set up the middleware for JSON and URLencoding 
Set up the path for the NotesRoutes

*/

const express = require("express")
const mongoose = require("mongoose")
const notesRoutes = require("./routes/notesRoutes.js")

const PORT = process.env.PORT || 8081
const DB_URL = "mongodb+srv://onealjean_db_user:viMR3pf7AsQV4woo@week06cluster.6qu4qkz.mongodb.net/"

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (request, response) => {
    response.send("<h1>Welcome to the root path of the server</h1>")})

app.use("/notes", notesRoutes)

mongoose.connect(DB_URL)
    .then(() => {
        console.log("Connected to the MongoDB Atlass server")
        app.listen(PORT, () => {
            console.log(`Server is listening at port ${PORT}`)
        })
    })
    .catch(() => {
        console.log(error)
        console.error("Could not connect to the MongoDB server")
        process.exit(1)
    })