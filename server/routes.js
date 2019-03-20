const controllers = require('./controllers.js');

module.exports = app => {
  app
    .get('/api/authors', controllers.getAll)
    .get('/api/authors/:id', controllers.getOne)
    .post('/api/authors', controllers.create)
    .put('/api/authors/:id', controllers.update)
    .delete('/api/authors/:id', controllers.delete)
}