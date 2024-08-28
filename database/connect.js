
const mysql= require('mysql');
var conn = mysql.createConnection({
    // host name
    host: 'localhost',
    //tên tài khoản nếu dùng mặc định của mysql là root
     user: 'root',
     //mật khẩu để vào csdl mặc định của mysqli là rỗng 
     password: '',
    //tên cơ sở dữ liệu muốn kết nối
      database: 'bai_tap_lon',
});

module.exports = conn;