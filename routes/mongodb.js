
var status = require('./status');

var MongoClient = require('mongodb').MongoClient;

var dbUrl = 'mongodb://192.168.133.54:27017/server';

//连接数据库操作
function _connectDB(callback) {
    MongoClient.connect(dbUrl, function (err, db) {
        console.log(err);
        callback(err, db);
    });
};

    /*
    * des: 插入一条记录
    * @collection: 表名
    * @query: JSON数据
    * @callback：回调 sueccess or fail
    *
    * */
module.exports.insertOne = function(collection, query, callback) {
    _connectDB(function(err, db){
        if(err) {
            console.log(err);
            return callback(err.db);
        };
        var dbase = db.db("server");
        dbase.collection(collection).insertOne(query, function(err, result){
            callback(err, result);
            db.close();
        });
    });
};

    /*
    * des: 插入多条记录
    * @collection: 表名
    * @query: JSON数组
    * @callback：回调 sueccess or fail
    *
    * */
module.exports.insertMany = function(collection, query, callback) {
    _connectDB(function(err, db){
        if(err) {
            return callback(err, db);
        };
        var dbase = db.db("server");
        dbase.collection(collection).insertMany(query, function(err, result){
            callback(err, result);
            db.close();
        });
    });
};
    /*
    * @des：读取所有的记录
    * @collection: 表名
    * @query：JSON查询条件
    * @field：需要哪些字段
    * @sort：排序
    * @skip:跳过多少个
    * @sort_desc
    * @limit：一页多少个
    * @callback：回调，返回符合要求的记录或者失败信息
    *
    * */
module.exports.find = function(collection,query,filed,sort,skip,limit, callback) {
    _connectDB(function(err, db){
        if(err) {
            return callback(err, db);
        };
        var dbase = db.db("server");
        dbase.collection(collection).find(query,filed).sort(sort).skip(skip).limit(limit).toArray(function(err, result){
            callback(err, result);
            db.close();
        });
    });
}

    /*
    * @des：读取一条记录
    * @collection: 表名
    * @id：_id
    * @field：需要哪些字段
    * @callback：回调，返回符合要求的记录或者失败信息
    *
    * */
module.exports.findById = function(collection,id, filed,callback) {
    _connectDB(function(err, db){
        if(err) {
            return callback(err, db);
        };
        var dbase = db.db("server");
        dbase.collection(collection).findById(id, filed, function(err, result){
            callback(err, result);
            db.close();
        });
    });
}

    /*
    * @des：读取一条记录
    * @collection: 表名
    * @query：JSON查询条件
    * @field：需要哪些字段
    * @callback：回调，返回符合要求的记录或者失败信息
    *
    * */
module.exports.findOne = function(collection, query,field,callback) {
    _connectDB(function(err,db) {
        if(err) {
            return callback(err,db);
        };
        var dbase = db.db("server");
        dbase.collection(collection).findOne(query, field, function(err, result) {
            callback(err, result);
            db.close();
        });
    });
}

    /*
    * @des：更新一条记录
    * @collection: 表名
    * @query：查询条件，Mongo查询的JSON字面量
    * @updateModel：需要更新的JSON格式的模型
    * @callback：返回成功或者失败信息
    *
    * */
module.exports.update = function(collection, query, updateModel, callback) {
    _connectDB(function(err,db) {
        if(err) {
            return callback(err,db);
        };
        var set = {$set: updateModel};
        var dbase = db.db("server");
        dbase.collection(collection).update(query, set, function(err,result) {
            callback(err, result);
            db.close();
        });
    });
}

    /*
    * @des：删除一条记录
    * @collection: 表名
    * @query：查询条件，Mongo查询的JSON字面量
    * @callback：返回失败或者成功的信息
    *
    * */
module.exports.delete = function(collection, query, callback) {
    _connectDB(function(err,db) {
        if(err) {
            return callback(err,db);
        };
        var dbase = db.db("server");
        dbase.collection(collection).remove(query, function(err, result) {
            callback(err, result);
            db.close();
        });
    });
}

    /*
    * @des：计算总数
    * @collection: 表名
    * @query：查询条件，Mongo查询的JSON字面量
    * @callback：返回失败或者成功的信息
    *
    * */
module.exports.count = function(collection, query, callback) {
    _connectDB(function(err,db) {
        if(err) {
            return callback(err,db);
        };
        var dbase = db.db("server");
        dbase.collection(collection).count(query, function(err, result) {
            callback(err, result);
            db.close();
        });
    });
}
    /*
    * @des：分组
    * @collection: 表名
    * @query：查询条件
    * @callback：返回失败或者成功的信息
    *
    * */
module.exports.aggregate = function(collection, query, callback) {
    _connectDB(function(err,db) {
        if(err) {
            return callback(err,db);
        };
        var dbase = db.db("server");
        dbase.collection(collection).aggregate(query).toArray(function(err, result){
            callback(err, result);
            db.close();
        });
    });
}
