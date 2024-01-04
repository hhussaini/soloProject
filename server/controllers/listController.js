const db = require('../models/listModels');

const listController = {};

listController.getItems = async (req, res, next) => {

  // write code here
  let query = 'SELECT * FROM list';
  const result = await db.query(query);
  //console.log(result.rows);
  res.locals.list = result.rows;
  
  console.log(" got into controller ");
  console.log(result.rows);

  return next();
};

listController.pushItems = async (req, res, next) => {

    

    let query = 'INSERT INTO list (text) VALUES ';
    const result = await db.query(query);
    //console.log(result.rows);
    res.locals.list = result.rows;
    
    console.log(" got into controller ");
    console.log(result.rows);
  
    return next();
};

module.exports = listController;