const userController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Eventz API!',
  }));

  app.post('/api/user/register', userController.register);
  app.post('/api/user/login', userController.login);

};