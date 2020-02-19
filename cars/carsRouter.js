const express = require('express');

const router = express.Router();
const db = require('../dbConfig.js');



router.get("/", (req, res) => {
    db.select('*').from('cars')
      .then(car => {
        res.status(200).json(car);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'failed to get the list of cars'});
      });
  });


  router.get("/:id", (req, res) => {
    const { id } = req.params;
  
    db("cars")
      .where({ id })
      .first()
      .then(car => {
        res.json(car);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve car" });
      });
  });

  router.post('/', validateAcctPost, (req, res) => {
    // add a car 
    // insert into car () values ()
    const newCar = req.body;
    db('cars')
    .insert(newCar, 'id') // will generare a warning on console when using sqlite, ignore that 
    .then(newCarIds => {
        res.status(201).json(newCarIds);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'failed to add new car'})
    });
    });

  

    router.put('/:id', (req, res) => {
      // update the car post 
      const { id } = req.params
      db('cars') 
      .where({ id: id }) 
      .update(req.body)
      .then(count => {
          res.status(200).json(count);
      })
      .catch(error => {
      console.log(error);
      res.status(500).json({ error: ' failed to update the car post'})
          });
      });

      router.delete('/:id', (req, res) => {
        // removes the post
        const id = req.params;
        db('cars')
        .where( id ) 
        .del()
        .then(deleted => {
            res.status(200).json(deleted);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: `error deleting the account`})
        })
    })
    
    // custom middleware :
    
    function validateAcctPost(req, res, next) {
        const { VIN } = req.body;
        const { Make } = req.body;
        const { Model } = req.body;
        const { Mileage } = req.body;
      
    
        if(!req.body) {
            return res.status(400).json({ error: ` must provide a body to create a new car`});
        }
    
        if (!VIN) {
            return res.status(400).json({ error: ` must provide a VIN for new car`});
        }
    
        if (!Make) {
            return res.status(400).json({ error: ` must provide Make for new car`})
        }
        if (!Model) {
          return res.status(400).json({ error: ` must provide a Model for new car`});
      }
  
      if (!Mileage) {
          return res.status(400).json({ error: ` must provide Mileage for new car`})
      }
    
        if (typeof VIN !== "string"){
            return res.status(400).json({ error: `must provide number for VIN`});
        }
    
        if(typeof Make !== "string"){
            return res.status(400).json({ error: ` must provide a text value for Make `})
        }

  
      if(typeof Model !== "string"){
          return res.status(400).json({ error: ` must provide a text value for Model `})
      }

      if(typeof Mileage !== "string"){
        return res.status(400).json({ error: ` must provide a number value for Mileage `})
    }

    
        req,body = {VIN, Make, Model, Mileage}
        next();
    }
    


  module.exports = router;