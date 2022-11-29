const express = require("express");
// import express from "express";
const users = require('./users.json');
// import users from './users.json' assert {type: "json"};

const server = express();

server.listen(3000)

server.get("/users", (request, response) => {
    const userName = users.find(user => user.first_name === request.query.name)
    const lastName = users.find(user => user.last_name === request.query.name)
    if (userName) {
        return response.json(userName)
    }
    if (lastName) {
        return response.json(lastName)
    }
    response.json(users)
})
server.get("/users/:id", (request, response) => {
    const { id } = request.params;
    const user = users.find(user => {
        return user.id === +id
    })
    if(isNaN(id)){
        return response.send("id is not a number")
    }
    if(!user){
        return response.send("not found")
    }

    response.json(user)
})