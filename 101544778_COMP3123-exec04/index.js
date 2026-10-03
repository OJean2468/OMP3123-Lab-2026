const express = require("express")

//Initialize Express Application 
const app = express();

const SERVER_PORT = 3000

// ----------------------------------------------------------------- Set up the middleware for Express ------------------

//We want to be able to serve static files. 
//The URL of the webpage can be accessed through locahost:3000/static
app.use("/static", express.static("public"))

//We want to serve JSON 
//Middleware to parse JSON bodies in incoming requests
app.use(express.json())


//Read the URL params or queries
//Extended: true property in JSON object passed as args to urlendcoded
//Lets us use qs library 
//Middleware to parse URL-encoded bodies in incoming requests
app.use(express.urlencoded({extended: true}))
//-------------------------------------------------------------------------------------------------------------------------

//Define a route for the route URL 
app.get("/", (request, response) =>{
    response.send("<h1> Welcome to the root of the server - using GET method </h1>")
})


//Define a route for the /hello URL 
app.get("/hello", (request, response) =>{
    response.send("<h1>Hello Express JS</h1>")
})


//Query String Parameter (/user) GET
//http://localhost:3000/user?firstname=value&lastname=value 
app.get('/user', (request, response) =>{

    console.log(request.query)
    const firstname = request.query.firstname || "ONeal";
    const lastname = request.query.lastname || "Jean"

    response.send({
        method: "GET",
        path: `/user?first_name=${firstname}&last_name=${lastname}`,
        firstname: firstname,
        lastname: lastname
    })


})


//Path Parameter example 
//http://localhost:3000/employee/John
app.post("/user/:firstname/:lastname", (request, response) => {
    console.log(request.params)

    const firstname = request.params.firstname
    const lastname = request.params.lastname

    response.send({
        method: "POST",
        path: `/user?first_name=${firstname}&last_name=${lastname}`,
        firstname: firstname,
        lastname: lastname
    });

});


//Body Parameter | Expects the body parameters for arrays of users firstname and lastname
app.post("/users", (request, response) => {
    const firstname = request.body.firstname
    const lastname = request.body.lastname


     response.send({
        method: "POST",
        path: `/users`,
        firstname: firstname,
        lastname: lastname
    });
});




app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}/`)
})