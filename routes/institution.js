const router = require('express').Router();
let Registered_Institution = require('../models/registeredinst.model');

router.route('/').get((req, res) => {
  Registered_Institution.find()
    .then(registeredInst => res.json(registeredInst))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const institutionName = req.body.institutionName;
  const academicID = req.body.academicID;
  const Users = Array(req.body.Users);



  const newInstitution = new Registered_Institution({
    institutionName,
    academicID,
    Users,
  });

  newInstitution.save()
  .then(() => res.json('Institution added, BRO!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Registered_Institution.findById(req.params.id)
    .then(registeredInst => res.json(registeredInst))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Registered_Institution.findByIdAndDelete(req.params.id)
    .then(() => res.json('Institution deleted, BRO!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Registered_Institution.findById(req.params.id)
    .then(registeredInst => {
      registeredInst.institutionName = req.body.institutionName;
      registeredInst.academicID = req.body.academicID;
      registeredInst.Users = Array(req.body.Users);

      registeredInst.save()
        .then(() => res.json('Institution updated, BRO!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 