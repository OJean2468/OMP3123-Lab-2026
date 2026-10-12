const express = require('express');
const fs = require('fs');
const routerUser = express.Router();

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req, res) => {
  fs.readFile(__dirname + '/../user.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({
        status: false,
        message: "Error reading user data"
      });
    }
    res.json(JSON.parse(data));
  });
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and password is valid then send response as below
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below
    {
        status: false,
        message: "User Name is invalid"
    }
- If password is invalid then send response as below
    {
        status: false,
        message: "Password is invalid"
    }
*/
routerUser.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile(__dirname + '/../user.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({
        status: false,
        message: "Error reading user data"
      });
    }

    const user = JSON.parse(data);

    if (username !== user.username) {
      return res.json({
        status: false,
        message: "User Name is invalid"
      });
    }

    if (password !== user.password) {
      return res.json({
        status: false,
        message: "Password is invalid"
      });
    }

    res.json({
      status: true,
      message: "User Is valid"
    });
  });
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout', (req, res) => {
  const { username } = req.query;

  if (!username) {
    return res.status(400).send('<b>Username is required</b>');
  }

  res.send(`<b>${username} successfully logout.</b>`);
});

module.exports = routerUser;