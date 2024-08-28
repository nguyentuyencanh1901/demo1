var conn=require ('../database/connect');
const bcrypt = require('bcrypt')
const  Users={
  //phương thức lấy ra tất cả bản ghi trong bảng Sanpham
getAll:(callback)=>{
        
    return conn.query("SELECT * FROM users",callback);
},
//phương thức tìm bản ghi theo id 
findById:(id,callback)=>{
    return conn.query("SELECT * FROM users WHERE id = " +id,callback);
},


//phương thức thêm mới 
create:(data,callback)=>{
    return  conn.query(`INSERT INTO users(name,email,password) VALUES('${data.name}','${data.email}','${data.passmoi}')`,callback);
},

//phương thức cập nhật
update:(data,callback)=>{

    return conn.query(`UPDATE users SET name='${data.name}',password='${data.passmoi}',email='${data.email}' WHERE id='${data.id}' `,callback);
},
delete: (id,callback)=>{
    return conn.query("delete  FROM users WHERE id = " +id,callback);
},

check_login:(email,password,callback)=>{
    var sql="SELECT * FROM users WHERE email='"+email+"'";
        conn.query(sql,(err,data)=>{
        if(data[0]){

            bcrypt.compare(password,data[0].password,(err,result)=>{
                
                if(result)
                    return callback(null,data[0]);
                else
                return callback(err,null);
            })
         
        }
        else{
            let err = "sai thông tin rồi";
            return callback(err,null);
        }
    });
}
}
module.exports=Users;