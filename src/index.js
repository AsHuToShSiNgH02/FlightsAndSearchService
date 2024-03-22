const express = require("express");
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig'); //setting up enviroment variable 

const SetupAndStartServer = async () => {
    //create the express object
    const app = express();

    app.use(bodyParser.json());// parse application/json
    app.use(bodyParser.urlencoded({ extended: false }))// parse application/x-www-form-urlencoded

    const PORT = 3000;
    app.listen(PORT, ()=> {
        console.log(`Server started at ${PORT}`);
    });
}

SetupAndStartServer();