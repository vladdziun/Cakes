const Model = require('./models.js');

module.exports = {
  
  getAll: (req, res) => {
    Model.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  create: (req, res) => {
    const DATA = req.body;
    Model.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  delete: (req, res) => {
    const ID = req.params.id;
    Model.findOneAndRemove({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getOne: (req, res) => {
    const ID = req.params.id;
    Model.findOne({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  update: (req, res) => {
    const DATA = req.body;
    const ID = req.params.id;
    Model.findOneAndUpdate({_id: ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}

