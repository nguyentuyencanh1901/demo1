const TrangchuController= require('../controllers/TrangchuController');

const route_Trangchu = function(app){
    
    app.get('/',TrangchuController.index);
    

}
module.exports = route_Trangchu;