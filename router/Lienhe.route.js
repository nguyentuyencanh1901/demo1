const LienheController = require('../controllers/LienheController');


const route_Lienhe = function(app){
    app.get('/lien-he',LienheController.index);
    

}
module.exports=route_Lienhe;

