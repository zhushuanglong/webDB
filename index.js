'use strict';
if (typeof localStorage == 'undefined') {
    var _localStorage = function() {
        this.expires = 60 * 24 * 3600
    }
    _localStorage.prototype = {
        init: function() {
            var date = new Date();
            date.setTime(date.getTime() + this.expires);
            this.setItem('expires', date.toGMTString());
        },
        findItem: function(key) {
            var bool = document.cookie.indexOf(key);
            if (bool < 0) {
                return true;
            } else {
                return false;
            }
        },
        getItem: function(key) {
            var item = this.findItem(key);
            if (!item) {
                var array = document.cookie.split(';')
                for (var i = 0, len = array.length; i < len; i++) {
                    var arraySplit = array[i];
                    if (arraySplit.indexOf(key) > -1) {
                        var getValue = array[i].split('=');
                        getValue[0] = getValue[0].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
                        if (getValue[0] == key) {
                            return getValue[1];
                        } else {
                            return 'null';
                        }
                    }
                }
            }
        },
        setItem: function(key, value) {
            document.cookie = key + '=' + value;
        },
        clear: function() {
            for (var cl = 0; cl < arguments.length; cl++) {
                var date = new Date();
                date.setTime(date.getTime() - 100);
                document.cookie = arguments[cl] + "=a; expires=" + date.toGMTString();
            }
        }
    }
    var localStorage = new _localStorage();
    localStorage.init();
}


var webDB = function() {}
webDB.prototype = {
    setJson: function(json) {
        return localStorage.setItem("webDB", JSON.stringify(json));
    },
    getJson: function() {
        return JSON.parse(localStorage.getItem("webDB"));
    },
    clear: function() {
        localStorage.clear("webDB");
    }
}

// CommonJS
if (typeof module != 'undefined' && module.exports)
  module.exports = webDB;
