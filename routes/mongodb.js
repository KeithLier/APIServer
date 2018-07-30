
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://192.168.133.54:27017/server';

var dbUrl = 'mongodb://192.168.133.54:27017/';

// // 创建数据库
// MongoClient.connect(url,function(err, db) {
//     if(err)
//         throw err;

//     console.log('数据库已创建');

//     var dbase = db.db("server");
//     dbase.createCollection('port', function(err, res) {
//         if(err) throw err;
//         console.log('集合已创建');
//         db.close();
//     });
// });

// // 插入数据
// MongoClient.connect(dbUrl,function(err, db) {
//     if(err)
//         throw err;

//     var dbase = db.db("server");
//     var obj = [
//         { name: 'peco',age: '24',city: 'Beijing'},
//         { name: 'leon',age: '22',city: 'shandong'},
//         { name: 'allen',age: '23',city: 'ShangHai'}
//     ]
//     dbase.collection('port').insertMany(obj, function(err, res) {
//         if (err) {
//             throw err;
//             return;
//         }
//         console.log("文档插入成功");
//         db.close();
//     });
// });

// // 查找数据
// MongoClient.connect(dbUrl,function(err, db) {
//     if(err)
//         throw err;

//     var dbase = db.db("server");
//     var whereStr = {

//     }
//     dbase.collection('port').find(whereStr).toArray(function(err, res) {
//         if (err) {
//             throw err;
//             return;
//         }
//         console.log(res);
//         db.close();
//     });
// });

// // 更新数据
// MongoClient.connect(dbUrl,function(err, db) {
//     if(err)
//         throw err;

//     var dbase = db.db("server");
//     var whereStr = {
//         'city': 'ShangHai'
//     }
//     var updateStr = {
//         $set: {'city': 'hangzhou'}
//     }
//     dbase.collection('port').updateMany(whereStr, updateStr,function(err, res) {
//         if (err) {
//             throw err;
//             return;
//         }
//         console.log(res.result.nModified);
//         db.close();
//     });
// });

// 删除数据
// MongoClient.connect(dbUrl,function(err, db) {
//     if(err)
//         throw err;

//     var dbase = db.db("server");
//     var whereStr = {
//         'city': 'hangzhou'
//     }
//     dbase.collection('port').deleteMany(whereStr,function(err, res) {
//         if (err) {
//             throw err;
//             return;
//         }
//         console.log(res.result.n);
//         db.close();
//     });
// });

// 分页查询

// MongoClient.connect(dbUrl,function(err, db) {
//     if(err)
//         throw err;

//     var dbase = db.db("server");
//     var whereStr = {

//     }
//     dbase.collection('port').find(whereStr).limit(10).toArray(function(err, res) {
//         if (err) {
//             throw err;
//             return;
//         }
//         console.log(res);
//         db.close();
//     });
// });

// // 删除集合
// MongoClient.connect(dbUrl,function(err, db) {
//     if(err)
//         throw err;

//     var dbase = db.db("server");
//     dbase.collection('port').drop(function(err, res) {
//         if (err) {
//             throw err;
//         }
//         if(res) {
//             console.log("集合已删除");
//         }
//         db.close();
//     });
// });


module.exports = Mongo;

Mongo.insert = function(infos) {
    open();
    MongoClient.connect(dbUrl,function(err, db) {
        if(err)
            throw err;
    
        var dbase = db.db("server");
        dbase.collection('port').insertMany(infos, function(err, res) {
            if (err) {
                throw err;
                return;
            }
            console.log("文档插入成功");
            db.close();
        });
    });
}

function open () {
    MongoClient.connect(url,function(err, db) {
        if(err)
            throw err;
    
        console.log('数据库已创建');
    
        var dbase = db.db("server");
        dbase.createCollection('port', function(err, res) {
            if(err) throw err;
            console.log('集合已创建');
            db.close();
        });
    });
}