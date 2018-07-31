
var status = require('./status'),
    db = require('mongonskin').db('mongodb://192.168.133.54:27017/server',{native_parser:true});
var CURD = function(collection) {
    this.collection = collection;
    db.bind(this.collection);
}

CURD.prototype = {

    /*
    * des: 插入一条记录
    * @query: JSON数据
    * @callback：回调 sueccess or fail
    *
    * */
    add: function(query, callback) {
        db[this.collection].insert(query, function(err, item){
            if(err){
                return callback(status.fail);
            }
            var obj = {
                status: status.success.status,
                message: status.success.message,
                items: {id: item[0]['_id']}
            }
            return callback(obj);
        });
    },
    /*
    * des: 插入多条记录
    * @query: JSON数组
    * @callback：回调 sueccess or fail
    *
    * */
    addMany: function(query, callback) {
        db[this.collection].insertMany(query, function(err, items){
            if(err){
                return callback(status.fail);
            }
            var obj = {
                status: status.success.status,
                message: status.success.message,
                items: items
            }
            return callback(obj);
        });
    },

    /*
    * @des：读取所有的记录
    * @query：JSON查询条件
    * @field：需要哪些字段
    * @sort：排序
    * @skip:跳过多少个
    * @sort_desc
    * @limit：一页多少个
    * @callback：回调，返回符合要求的记录或者失败信息
    *
    * */
    find: function(query,field,sort,skip,limit,callback) {
        db[this.collection].find(query,field),sort(sort).skip(skip).limit(limit).toArray(function(err, items){
            if(err){
                return callback(status.fail);
            }
            var obj = {
                status: status.success.status,
                message: status.success.message,
                items: items
            }
            return callback(obj);
        });
    },

    /*
    * @des：读取一条记录
    * @id：_id
    * @field：需要哪些字段
    * @callback：回调，返回符合要求的记录或者失败信息
    *
    * */
    findById: function(id, field, callback) {
        db[this.collection].findById(id, field, function(err, items) {
            if(err){
                return callback(status.fail);
            }
            var obj = {
                status: status.success.status,
                message: status.success.message,
                items: items
            }
            return callback(obj);
        });
    },

    /*
    * @des：读取一条记录
    * @query：JSON查询条件
    * @field：需要哪些字段
    * @callback：回调，返回符合要求的记录或者失败信息
    *
    * */
    findOne: function(query, field, callback) {
        db[this.collection].findOne(query, field, function(err, items) {
            if(err){
                return callback(status.fail);
            }
            var obj = {
                status: status.success.status,
                message: status.success.message,
                items: items
            }
            return callback(obj);
        });
    },

        /*
    * @des：更新一条记录
    * @query：查询条件，Mongo查询的JSON字面量
    * @updateModel：需要更新的JSON格式的模型
    * @callback：返回成功或者失败信息
    *
    * */
    update: function(query, updateModel, callback){
        var set = {$set: updateModel};
        db[this.collection].update(query, set, function(err){
            if(err){
                return callback(status.fail);
            }else{
                return callback(status.success);
            }
        });
    },

    /*
    * @des：删除一条记录
    * @query：查询条件，Mongo查询的JSON字面量
    * @callback：返回失败或者成功的信息
    *
    * */
	delete: function(query, callback){
		db[this.collection].remove(query, function(err){
			if(err){
				return callback(status.fail);
			}else{
				return callback(status.success);
			}
		});
	},

    /*
    * @des：计算总数
    * @query：查询条件，Mongo查询的JSON字面量
    * @callback：返回失败或者成功的信息
    *
    * */
    count: function(query, callback){
        db[this.collection].count(query, function(err, items) {
            if(err){
                return callback(status.fail);
            }
            var obj = {
                status: status.success.status,
                message: status.success.message,
                items: items
            };
            return callback(obj);
        });
    },
        /*
    * @des：更新一条记录
    * @query：查询条件，Mongo查询的JSON字面量
    * @updateModel：需要更新的JSON格式的模型
    * @callback：返回成功或者失败信息
    *
    * */
    update: function(query, updateModel, callback){
        var set = {$set: updateModel};
        db[this.collection].update(query, set, function(err){
            if(err){
                return callback(status.fail);
            }else{
                return callback(status.success);
            }
        });
    },

    /*
    * @des：删除一条记录
    * @query：查询条件，Mongo查询的JSON字面量
    * @callback：返回失败或者成功的信息
    *
    * */
	delete: function(query, callback){
		db[this.collection].remove(query, function(err){
			if(err){
				return callback(status.fail);
			}else{
				return callback(status.success);
			}
		});
	},

    /*
    * @des：计算总数
    * @query：查询条件，Mongo查询的JSON字面量
    * @callback：返回失败或者成功的信息
    *
    * */
    count: function(query, callback){
        db[this.collection].count(query, function(err, items) {
            if(err){
                return callback(status.fail);
            }
            var obj = {
                status: status.success.status,
                message: status.success.message,
                items: items
            };
            return callback(obj);
        });
    },

    /*
    * @des：更新一条记录
    * @query：查询条件，Mongo查询的JSON字面量
    * @updateModel：需要更新的JSON格式的模型
    * @callback：返回成功或者失败信息
    *
    * */
    update: function(query, updateModel, callback){
        var set = {$set: updateModel};
        db[this.collection].update(query, set, function(err){
            if(err){
                return callback(status.fail);
            }else{
                return callback(status.success);
            }
        });
    },

    /*
    * @des：删除一条记录
    * @query：查询条件，Mongo查询的JSON字面量
    * @callback：返回失败或者成功的信息
    *
    * */
	delete: function(query, callback){
		db[this.collection].remove(query, function(err){
			if(err){
				return callback(status.fail);
			}else{
				return callback(status.success);
			}
		});
	},

    /*
    * @des：计算总数
    * @query：查询条件，Mongo查询的JSON字面量
    * @callback：返回失败或者成功的信息
    *
    * */
    count: function(query, callback){
        db[this.collection].count(query, function(err, items) {
            if(err){
                return callback(status.fail);
            }
            var obj = {
                status: status.success.status,
                message: status.success.message,
                items: items
            };
            return callback(obj);
        });
    },  
    /**
	 * 关闭数据库
	 * @return nil
	 */
    closeDB: function(){
        db.close();
    }  
};

module.exports = CURD;

// var MongoClient = require('mongodb').MongoClient;

// var url = 'mongodb://192.168.133.54:27017/server';

// var dbUrl = 'mongodb://192.168.133.54:27017/';

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


// module.exports = Mongo;

// Mongo.insert = function(infos) {
//     open();
//     MongoClient.connect(dbUrl,function(err, db) {
//         if(err)
//             throw err;
    
//         var dbase = db.db("server");
//         dbase.collection('port').insertMany(infos, function(err, res) {
//             if (err) {
//                 throw err;
//                 return;
//             }
//             console.log("文档插入成功");
//             db.close();
//         });
//     });
// }

// function open () {
//     MongoClient.connect(url,function(err, db) {
//         if(err)
//             throw err;
    
//         console.log('数据库已创建');
    
//         var dbase = db.db("server");
//         dbase.createCollection('port', function(err, res) {
//             if(err) throw err;
//             console.log('集合已创建');
//             db.close();
//         });
//     });
// }