var settings=require("./config/settings");
var mysql = require("mysql");
var pool = mysql.createPool({
    host:settings.host,
    user:settings.user,
    password:settings.password,
    database:settings.database
});

function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows);
            connection.release();
        });
    });
}

exports.query = query;