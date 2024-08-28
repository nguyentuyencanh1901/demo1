const acountController = require('../controllers/acountController');

const route_acount= function(app){
    
    app.get('/add-acount',acountController.add);
    app.post('/post-add-acount',acountController.create);
    app.get('/acount',acountController.app);
    app.post('/post-add-acountt',acountController.check_login);
}
module.exports = route_acount;