const ChungloaiController= require('../controllers/ChungloaiController');
const authMiddlweare = require('../middleware/authmiddleware');

const route_Chungloai = function(app){
    

    app.get('/chungloai',authMiddlweare.authcheck, ChungloaiController.index);
    //định nghĩa route thêm mới 
    app.get('/add-Chungloai',authMiddlweare.authcheck,ChungloaiController.add);
    app.post('/post-add-Chungloai',authMiddlweare.authcheck,ChungloaiController.create);
    //định nghĩa thêm route sửa 
    app.get('/edit-Chungloai/:id',authMiddlweare.authcheck,ChungloaiController.edit);
    app.post('/post-edit-Chungloai',authMiddlweare.authcheck,ChungloaiController.update);
    //định nghĩa xóa
    app.post('/chungloai/delete/:id',authMiddlweare.authcheck,ChungloaiController.delete);
}
module.exports = route_Chungloai;