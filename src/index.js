const express = require("express");

const {PORT} = require('./config/serverConfig'); //setting up enviroment variable 

const SetupAndStartServer = async () => {
    //create the express object
    const app = express();
    const PORT = 3000;
    app.listen(PORT, ()=> {
        console.log(`Server started at ${PORT}`);
    });
}

SetupAndStartServer();