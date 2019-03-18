const controllers = require('./controllers.js');

module.exports = app => {
  app
    .get('/api/cakes', controllers.getAll)
    .get('/api/cakes/:id', controllers.getOne)
    .post('/api/cakes', controllers.create)
    .put('/api/cakes/:id', controllers.update)
    .delete('/api/cakes/:id', controllers.delete)
}