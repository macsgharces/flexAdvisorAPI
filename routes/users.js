const router = require('express').Router();
let Users = require('../models/users.model');

router.route('/').get((req, res) => {
  Users.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const fullname = req.body.fullname;
  const password = req.body.password;
  const institutionID = req.body.institutionID;
  const roles = req.body.role;
  const program = req.body.program;
  const assignedDir = req.body.assignedDir;
  const assignedAdv = req.body.assignedAdv;
  const assignedStu = Array(req.body.assignedStu);
  const IEP = req.body.IEP;
  const IEPstatus = Boolean(req.body.IEPStatus);
  const classPerSemester = Number(req.body.classPerSemester);
  const classesTaken = Number(req.body.classesTaken);
  const messageThread = Array(req.body.messageThread);



  const newUsers = new Users({
    username,
    fullname,
    password,
    institutionID,
    roles,
    program,
    assignedDir,
    assignedAdv,
    assignedStu,
    IEP,
    IEPstatus,
    classPerSemester,
    classesTaken,
    messageThread,
  });

  newUsers.save()
  .then(() => res.json('User added, BRO!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Users.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Users.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted, BRO!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Users.findById(req.params.id)
    .then(users => {
      users.username = req.body.username;
      users.fullname = req.body.fullname;
      users.password = req.body.password;
      users.institutionID = req.body.institudionID;
      users.roles = req.body.roles;
      users.program = req.body.program;
      users.assignedDir = req.body.assignedDir;
      users.assignedDir = req.body.assignedAdv;
      users.assignedStu = Array(req.body.assignedStu);
      users.IEP = req.body.IEP;
      users.IEPstatus = Boolean(req.body.IEPStatus);
      users.classPerSemester = Number(req.body.classPerSemester);
      users.classesTaken = Number(req.body.classesTaken);
      users.messageThread = Array(req.body.messageThread);

      users.save()
        .then(() => res.json('User updated, BRO!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 