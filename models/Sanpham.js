
var conn= require('../database/connect');


const Sanpham = {
    //phương thức lấy ra tất cả bản ghi trong bảng Sanpham
    getAll:(callback)=>{
        
        return conn.query("SELECT * FROM sanpham order by gia ASC ",callback);
    },
    //phương thức tìm bản ghi theo id 
    findById:(id,callback)=>{
        return conn.query("SELECT * FROM sanpham WHERE id = " +id,callback);
    },
    search:(key,callback)=>{
        return conn.query("SELECT * FROM sanpham WHERE name  Like '%"+ key + "%'" + " LIMIT 5",callback);
    },

    //phương thức thêm mới 
    create:(data,callback)=>{
      
           
        return  conn.query(`INSERT INTO sanpham(name,chungloai_id,gia,giamgia,mota,img,trangthai,nhacungcap_id) VALUES('${data.name}',${data.chungloai},${data.gia},${data.giamgia},'${data.mota}','${data.fileanh}','${data.trangthai}',${data.nhacungcap})`,callback);
    },

    //phương thức cập nhật
    update:(data,callback)=>{

        return conn.query(`UPDATE sanpham SET name='${data.name}',chungloai_id='${data.chungloai}',gia='${data.gia}',giamgia='${data.giamgia}',mota='${data.mota}',img='${data.fileanh}',nhacungcap_id='${data.nhacungcap}',trangthai=${data.trangthai} WHERE id='${data.id}' `,callback);
    },
    delete: (id,callback)=>{
        return conn.query("delete  FROM sanpham WHERE id = " +id,callback);
    },

      
 

    
}

module.exports = Sanpham;