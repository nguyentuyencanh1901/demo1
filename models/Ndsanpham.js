var conn= require('../database/connect');


const Ndanpham = {
    //phương thức lấy ra tất cả bản ghi trong bảng Sanpham
    getAll:(callback)=>{
        
        return conn.query("SELECT * FROM sanpham",callback);
    },
      //phương thức tìm bản ghi theo id 
      findById:(chungloai,callback)=>{
        return conn.query("SELECT * FROM sanpham  WHERE chungloai_id = " +chungloai,callback);
    },
    
}
module.exports=Ndanpham;