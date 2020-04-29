const router = require('express').Router();
let School = require('../models/school.model');

router.route('/').get((req, res) => {
  School.find()
    .then(school => res.json([school]))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const academicID = req.body.academicID;
  const sysadmin_email = req.body.sysadmin_email;
  const school_addr = req.body.academicID;



  const newSchool = new School({
    academicID,
    sysadmin_email,
    school_addr,
  });

  newSchool.save()
  .then(() => res.json('School added, BRO!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  School.findById(req.params.id)
    .then(school=> res.json(school))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
 School.findByIdAndDelete(req.params.id)
    .then(() => res.json('School deleted, BRO!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  School.findById(req.params.id)
    .then(school => {
      school.academicID = req.body.academicID;
      school.sysadmin_email = req.body.sysadmin_email;
      school.school_addr = req.body.school_addr;

      school.save()
        .then(() => res.json('School updated, BRO!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 