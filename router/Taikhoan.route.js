const TaikhoanController= require('../controllers/TaikhoanController');
const authMiddlweare = require('../middleware/authmiddleware');

const route_Taikhoan = function(app){
  
    
    
    
    

    app.get('/Taikhoan',authMiddlweare.authcheck, TaikhoanController.index);
    //định nghĩa route thêm mới 
    app.get('/add-Taikhoan',authMiddlweare.authcheck,TaikhoanController.add);
    app.post('/post-add-Taikhoan',authMiddlweare.authcheck,TaikhoanController.create);
    //định nghĩa thêm route sửa 
    app.get('/edit-Taikhoan/:id',authMiddlweare.authcheck,TaikhoanController.edit);
    app.post('/post-edit-Taikhoan',authMiddlweare.authcheck,TaikhoanController.update);
    //định nghĩa xóa
    app.post('/Taikhoan/delete/:id',authMiddlweare.authcheck,TaikhoanController.delete);
}
module.exports = route_Taikhoan;