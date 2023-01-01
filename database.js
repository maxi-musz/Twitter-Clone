//The require(‘mongoose’) call above returns a Singleton object. 
//It means that the first time you call require(‘mongoose’), it 
//is creating an instance of the Mongoose class and returning it. 
//On subsequent calls, it will return the same instance that was 
//created and returned to you the first time because of how module 
//import/export works in ES6.
const mongoose = require("mongoose");


class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://Maximus:mosekola@cluster0.fbmnpac.mongodb.net/TWITTER-CLONE?retryWrites=true&w=majority")
        .then(() => {
            console.log("Database connection successful");
        })
        .catch((err) => {
            console.log("Database connection failed" + err);
        })
    }
}

module.exports = new Database();