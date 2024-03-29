const express = require("express");
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig'); //setting up enviroment variable 
const ApiRoutes = require('./routes/index');

const db = require('./models/index');

const SetupAndStartServer = async () => {
    //create the express object
    const app = express();

    app.use(bodyParser.json());// parse application/json
    app.use(bodyParser.urlencoded({ extended: false }))// parse application/x-www-form-urlencoded

    app.use('/api', ApiRoutes);

    app.listen(PORT, async ()=> {
        console.log(`Server started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true});
        }
    }); 
}

SetupAndStartServer(); 