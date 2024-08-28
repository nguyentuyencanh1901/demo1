
var conn= require('../database/connect');

const Nhacungcap = {
    //phương thức lấy ra tất cả bản ghi trong bảng Nhacungcap
    getAll:(callback)=>{
        return conn.query("SELECT * FROM nhacungcap",callback);
    },
    //phương thức tìm bản ghi theo id 
    findById:(id,callback)=>{
        return conn.query("SELECT * FROM nhacungcap WHERE id = " +id,callback);
    },
    

    //phương thức thêm mới 
    create:(data,callback)=>{
        return  conn.query(`INSERT INTO nhacungcap(name,diachi,email,phone) VALUES('${data.name}','${data.diachi}','${data.email}','${data.phone}')`,callback);
    },

    //phương thức cập nhật
    update:(data,callback)=>{
        return conn.query(`UPDATE nhacungcap SET name='${data.name}',diachi='${data.diachi}',email='${data.email}',phone='${data.phone}' WHERE id=${data.id}`,callback);
    },
    delete: (id,callback)=>{
        return conn.query("delete  FROM Nhacungcap WHERE id = " +id,callback);
    }
}
module.exports = Nhacungcap;