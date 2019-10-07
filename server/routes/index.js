const userController = require('../controllers').users;
const eventController = require('../controllers').events;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Eventz API!',
  }));

  app.post('/api/user/register', userController.register);
  app.post('/api/user/login', userController.login);

  app.get('/api/event', eventController.list);
  app.post('/api/event', eventController.create);
  app.get('/api/event/:eventId', eventController.detail);
  app.delete('/api/event/:eventId/delete', eventController.delete)
};