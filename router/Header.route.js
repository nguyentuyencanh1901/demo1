const HeaderController = require('../controllers/HeaderController');
const NdsanphamController= require('../controllers/NdsanphamController');

const route_Header = function(app){
    app.get('/header',HeaderController.index);
    app.get('/tk-Trangchu/search',HeaderController.search);
    

}
module.exports=route_Header;