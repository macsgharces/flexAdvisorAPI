const router = require('express').Router();
let Program = require('../models/programs.model');

router.route('/').get((req, res) => {
  Program.find()
    .then(program => res.json([program]))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const program_director = req.body.program_director;
  const program_name = req.body.program_name;
  const academicID = req.body.academicID;
  const class_list = Array(req.body.class_list);



  const newProgram = new Program({
    program_director,
    program_name,
    academicID,
    class_list,
  });

  newProgram.save()
  .then(() => res.json('Institution added, BRO!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Program.findById(req.params.id)
    .then(program=> res.json(program))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Program.findByIdAndDelete(req.params.id)
    .then(() => res.json('Program deleted, BRO!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Program.findById(req.params.id)
    .then(program => {
      program.program_director = req.body.program_director;
      program.program_name = req.body.program_name;
      program.class_list = Array(req.body.class_list);

      program.save()
        .then(() => res.json('Program updated, BRO!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 