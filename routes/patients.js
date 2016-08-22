var express = require('express');
var router = express.Router();

var Patient = require('../models/patient');

/* GET users listing. */
router.get('/', function(req, res, next) {

  Patient.find(function(err, patients){
    if(err){
        res.send(err);
    }
    res.json(patients);

  });
  // res.send('respond with a resource');
})
.get('/:id',function(req,res){
  console.log("getting "+req.params.id);
  Patient.findById(req.params.id, function(err, patient){
    if(err)
      res.send(err);
    res.json(patient);
  })
})
.put('/:id', function(req,res){
  Patient.findById(req.params.id, function(err, patient){
    if(err)
      res.send(err);
    patient.name = req.body.name;
    patient.save(function(err){
      if(err)
        res.send(err);
      res.send(patient);
    });
  })
})
.delete('/:id',function(req,res){
  Patient.remove({_id:req.params.id},function(err){
    console.log(err);
    if(err)
      res.send(err);
    res.send({msg:'deleted'});
  });
})
.post('/',function(req, res){
  console.log('posting'+JSON.stringify(req.body));
  var patient = new Patient();
  patient = req.body;

  patient.save(function(err){
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(patient);
  });
});

module.exports = router;
