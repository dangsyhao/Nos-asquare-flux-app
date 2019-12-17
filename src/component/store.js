var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

const Store = assign({}, EventEmitter.prototype, {

    status : 'CHUA CAP NHAT STATUS !',

    getStatus:function () {
        return this.status;
    },

    changeStatus:function (text) {
        return this.status = text;
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function(calback){
        this.on('change',calback)
    },

    removeChangeListener: function(calback){
        this.removeListener('change',calback);
    },


});

module.exports = Store;