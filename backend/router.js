const express = require('express');
const router = express.Router();
const cors= require('cors')
const app = express();
const fmodel = require('./feedbakModel');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

router.get('/test', (req, res) => res.send('report route testing!'));


router.get('/view', (req, res) => {
  fmodel.find()
    .then(reps => res.json(reps))
    .catch(err => res.json(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  fmodel.find({PID:id})
  .then(rep => {
    res.json(rep);
  })
    .catch(err => {
      res.json(err);
    });
});


router.post('/create', (req, res) => {
  fmodel.create(req.body)
    .then(rep => res.json(rep))
    .catch(err => res.json(err));
});


router.put('/update', (req, res) => {
  const {PID}=req.body;
  fmodel.updateOne({PID}, req.body)
    .then(rep => res.json(rep))
    .catch(err =>
      res.json(err)
    );
});


router.delete('/delete', (req, res) => {
  const {PID}=req.body;
  fmodel.deleteOne({PID})
    .then(rr => res.json(rr))
    .catch(err => res.json(err));
});

module.exports = router;