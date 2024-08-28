var conn=require ('../database/connect');

const  acount={
  //phương thức lấy ra tất cả bản ghi trong bảng Sanpham
getAll:(callback)=>{
        
    return conn.query("SELECT * FROM acount",callback);
},
//phương thức tìm bản ghi theo id 
findById:(id,callback)=>{
    return conn.query("SELECT * FROM acount WHERE id = " +id,callback);
},


//phương thức thêm mới 
create:(data,callback)=>{
    return  conn.query(`INSERT INTO acount(name,email,password) VALUES('${data.name}','${data.email}','${data.password}')`,callback);
},

//phương thức cập nhật
update:(data,callback)=>{

    return conn.query(`UPDATE acount SET name='${data.name}',password='${data.password}',email='${data.email}' WHERE id='${data.id}' `,callback);
},
delete: (id,callback)=>{
    return conn.query("delete  FROM acount WHERE id = " +id,callback);
},

check_login:(email,password,callback)=>{
    conn.query(`SELECT * FROM acount WHERE email = '${email}' AND password = '${password}'`,(err,data)=>{
        if(data[0]){
            return callback(null,data[0]);
        }
        else{
            let err = "sai thông tin rồi";
            return callback(err,null);
        }
    });
}
}
module.exports=acount;