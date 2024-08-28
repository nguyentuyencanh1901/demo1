
var conn= require('../database/connect');


const Trangchu = {
    //phương thức lấy ra tất cả bản ghi trong bảng Sanpham
    getAll:(callback)=>{
        
        return conn.query("SELECT * FROM sanpham",callback);
    },
    //phương thức tìm bản ghi theo id 
    findById:(chungloai,callback)=>{
        return conn.query("SELECT * FROM sanpham  WHERE chungloai_id = " +chungloai+ " LIMIT 5",callback);
    },
    search:(key,callback)=>{
        return conn.query("SELECT * FROM sanpham WHERE name  Like '%"+ key + "%'",callback);
    },
 

}

module.exports =Trangchu;
    ;