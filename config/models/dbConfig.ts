const {connect, connection} = require('mongoose');
const LivresSchema = require('./LivreSchema');

connect('mongodb+srv://dataBaseUsr:dbUser@cluster0.wqkqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log("connected to the database");
    })
    .catch(() => console.log("error when connecting"));

connection.on("connected", ()=>{
    console.log("connected");
})
