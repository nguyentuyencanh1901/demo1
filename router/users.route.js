const usersController = require('../controllers/usersController');

const route_users= function(app){
   
   app.get('/login',usersController.app);
    app.get('/add-users',usersController.add);
    app.post('/post-add-users',usersController.create);
    
    app.post('/login-check',usersController.check_login);


   
}
module.exports = route_users;