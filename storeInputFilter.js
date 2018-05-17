'use strict';
const _=require('lodash');

class StoreInputFilter {
    constructor(store) {
        this._store = store;
    }

    ready(){return this._store.ready();}

    set(key, value) {
        if (_.isNumber(value)){
            value = value.toString();
        }

        if(value===undefined || value===null || !_.isString(value)){
            return Promise.reject(
                'The value cannot be undefined, null or non-string type.');
        }

        if (_.isNumber(key)){
            key = key.toString();
        }

        if(key===undefined || key===null || !_.isString(key)){
            return Promise.reject(
                'The key cannot be undefined, null, or non-string type');
        }

        return this._store.set(key, value);
    }

    get(key) {
        if(key===undefined || key===null || !_.isString(key)){
            return Promise.reject(
                'The key cannot be undefined, null, or non-string type');
        }
        return this._store.get(key);
    }


    delete(key) {
        if(key===undefined || key===null || !_.isString(key)){
            return Promise.reject(
                'The key cannot be undefined, null, or non-string type. ');
        }
        return this._store.delete(key);
    }

    has(key) {
        if(key===undefined || key===null || !_.isString(key)){
            return Promise.reject(
                'The key cannot be undefined, null, or non-string type');
        }
        return this._store.has(key);
    }
}


module.exports = StoreInputFilter;
