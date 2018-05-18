'use strict';

const RedisStore = require('./stores/redisStore');
const DynamodbStore = require('./stores/dynamodbStore');
const MongoDBStore =  require('./stores/mongodbStore');
const MySQLStore = require('./stores/mySQLStore');
const PostgresStore = require('./stores/postgresStore');
const InputFilter = require('./storeInputFilter');

module.exports = function (storeName, options) {
    let store = null;
    switch(storeName.toUpperCase()){
        case 'REDIS':
            store = new RedisStore(options); 
            break;
        case 'DYNAMODB':
            store= new DynamodbStore(options);
            break;
        case 'MONGODB': 
            store= new MongoDBStore(options);
            break;
        case 'MYSQL':
            store = new MySQLStore(options);
            break;
        case 'POSTGRES':
        case 'POSTGRESQL':
            store = new PostgresStore(options); 
            break;
        default:
            break;
    }
    if(!store) {
        throw new Error('Store '+storeName + ' is not available');
    }
    return new InputFilter(store);
};

