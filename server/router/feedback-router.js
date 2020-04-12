const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Adds new feedback to the server
router.post('/',  (req, res) => {
    //Req.body is the survey data object received from client
    let newFeedback = req.body;
    console.log(`Adding feedback`, newFeedback);
    //Query text to establish the data being sent to the DB
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding feedback`, error);
        res.sendStatus(500);
      });
  });
  
  module.exports = router;