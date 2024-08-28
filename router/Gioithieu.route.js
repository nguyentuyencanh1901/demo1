const GioithieuController = require('../controllers/GioithieuController');


const route_Gioithieu = function(app){
    app.get('/gioi-thieu',GioithieuController.index);
    

}
module.exports=route_Gioithieu;

