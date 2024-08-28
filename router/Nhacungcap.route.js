const NhacungcapController= require('../controllers/NhacungcapController');
const authMiddlweare = require('../middleware/authmiddleware');

const route_Nhacungcap = function(app){
  
    
    
    
    

    app.get('/Nhacungcap',authMiddlweare.authcheck, NhacungcapController.index);
    //định nghĩa route thêm mới 
    app.get('/add-Nhacungcap',authMiddlweare.authcheck,NhacungcapController.add);
    app.post('/post-add-Nhacungcap',authMiddlweare.authcheck,NhacungcapController.create);
    //định nghĩa thêm route sửa 
    app.get('/edit-Nhacungcap/:id',authMiddlweare.authcheck,NhacungcapController.edit);
    app.post('/post-edit-Nhacungcap',authMiddlweare.authcheck,NhacungcapController.update);
    //định nghĩa xóa
    app.post('/Nhacungcap/delete/:id',authMiddlweare.authcheck,NhacungcapController.delete);
}
module.exports = route_Nhacungcap;