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


    console.log(req.body);
    let query = `INSERT INTO list (text) VALUES ${req.body}`;
    const result = await db.query(query);
    //console.log(result.rows);
    res.locals.pushed = result.rows;
    
    console.log(" got into controller ");
    console.log(result.rows);
  
    return next();
};

module.exports = listController;