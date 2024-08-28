const ChitietController= require('../controllers/ChitietController');

const route_Chitiet= function(app){
    app.get('/Chi-tiet/:id',ChitietController.index);
}
module.exports = route_Chitiet;