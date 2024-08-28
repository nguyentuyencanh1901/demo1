const SanphamController= require('../controllers/SanphamController');
const multer = require('multer');
const authMiddlweare = require('../middleware/authmiddleware');


const route_Sanpham = function(app){
    var fileanh;
    const luutru= multer.diskStorage({
        destination:(req,file,callback)=>{
            callback(null,'./public/img');
        },
        filename:(req,file,callback)=>{
            fileanh=`${Date.now()}-${file.originalname}`;
            callback(null,fileanh);
        }
    
    })
    //khai báo biến upload để thực thi
    
    var upload=multer({storage:luutru});
    app.get('/San-pham', (req, res) => {
        //lấy dữ liệu từ mysql
    
        var sql = "select * from sanpham";
        conn.query(sql, (err, cate) => {
            if (err) throw err;
            res.render('/Sanpham', { cat: cate });
        })
    });

    

    
    

    app.get('/Sanpham',authMiddlweare.authcheck, SanphamController.index);
    //định nghĩa route thêm mới 
    app.get('/add-Sanpham',authMiddlweare.authcheck,SanphamController.add);
    app.post('/post-add-Sanpham',authMiddlweare.authcheck,upload.single('hinhanh'),SanphamController.create);
    //định nghĩa thêm route sửa 
    app.get('/tk-Sanpham/search',authMiddlweare.authcheck,SanphamController.search);
    app.get('/edit-Sanpham/:id',authMiddlweare.authcheck,SanphamController.edit);
    app.post('/post-edit-Sanpham',authMiddlweare.authcheck,upload.single('hinhanh'),SanphamController.update);
    //định nghĩa xóa
    app.post('/Sanpham/delete/:id',SanphamController.delete);

    

}
module.exports = route_Sanpham;