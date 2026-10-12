const express = require('express');
const app = express();
const userRouter = require('./routes/users');
const apiRouter = require('./routes/index');

// Middleware to parse JSON request bodies
app.use(express.json());

// Add User Router
app.use('/api/v1/user', userRouter);

// Add API Router (home, profile, login)
app.use('/', apiRouter);


/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
  res.status(500).send('Server Error');
});


app.listen(process.env.port || 8080);
console.log('Web Server is listening at port ' + (process.env.port || 8080));