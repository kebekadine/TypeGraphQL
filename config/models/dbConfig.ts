const {connect, connection} = require('mongoose');
const LivresSchema = require('./LivreSchema');

connect('URLMONGODBATLAS a ajouter')
    .then(() => {
        console.log("connected to the database");
    })
    .catch(() => console.log("error when connecting"));

connection.on("connected", ()=>{
    console.log("connected");
})
