const NdsanphamController= require('../controllers/NdsanphamController');

const route_Ndsanpham = function(app){
    app.get('/nd-sanpham/:id',NdsanphamController.index);
  
    

}
module.exports=route_Ndsanpham;