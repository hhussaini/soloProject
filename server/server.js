const path = require('path');
const express = require('express');
const listController = require('./controllers/listController');


const app = express();
app.use(express.json());

const PORT = 3000;

app.use(express.static(path.resolve(__dirname, './src')));

app.get('/apitest', listController.getItems, (req, res) => {

    console.log(" reached here ");
    res.status(200).setHeader("Content-Type","application/json").json(res.locals.list);

})

app.post('/apitest', listController.pushItems, (req, res) => {

    console.log(" reached into push ");
    res.status(200).setHeader("Content-Type","application/json").json(res.locals.pushed);

})




// catch-all route handler for any requests to an unknown route
app.use('*', function (req, res){
    res.sendStatus(404);
  });

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });