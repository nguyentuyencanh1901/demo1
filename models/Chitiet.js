var conn=require ('../database/connect');

const  Chitiet={
  //phương thức lấy ra tất cả bản ghi trong bảng Sanpham
getAll:(callback)=>{
        
    return conn.query("SELECT * FROM sanpham",callback);
},
//phương thức tìm bản ghi theo id 
findById:(id,callback)=>{
    return conn.query("SELECT * FROM sanpham WHERE id = " +id,callback);
},

 //phương thức tìm bản ghi theo id 
 findByoneId:(trangthai,callback)=>{
    return conn.query("SELECT * FROM sanpham  WHERE chungloai_id = " +trangthai+ " LIMIT 5",callback);
},
}
module.exports = Chitiet;