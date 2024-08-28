
var conn= require('../database/connect');

const Chungloai = {
    //phương thức lấy ra tất cả bản ghi trong bảng Chungloai
    getAll:(callback)=>{
        return conn.query("SELECT * FROM chungloai",callback);
    },
    //phương thức tìm bản ghi theo id 
    findById:(id,callback)=>{
        return conn.query("SELECT * FROM chungloai WHERE id = " +id,callback);
    },
    

    //phương thức thêm mới 
    create:(data,callback)=>{
        return  conn.query(`INSERT INTO chungloai(name,filename,trangthai) VALUES('${data.name}','${data.filename}','${data.trangthai}')`,callback);
    },

    //phương thức cập nhật
    update:(data,callback)=>{
        return conn.query(`UPDATE chungloai SET name='${data.name}',filename='${data.filename}',trangthai='${data.trangthai}' WHERE id=${data.id}`,callback);
    },
    delete: (id,callback)=>{
        return conn.query("delete  FROM chungloai WHERE id = " +id,callback);
    }
}
module.exports = Chungloai;