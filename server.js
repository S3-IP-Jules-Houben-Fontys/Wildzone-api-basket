const express = require('express');
const db = require("./sequelize/models");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({extended : true  }));
app.use(express.json());

app.get('/test', function(){
    console.log('All good');
})

db.sequelize.sync().catch(err => {
    throw err
});

app.listen(port, function(){
    console.log("Server is running on http://localhost:" + port);
})