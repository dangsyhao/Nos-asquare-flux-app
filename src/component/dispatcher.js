
const Dispatcher = require('flux').Dispatcher;
const AppDisPatCher = new Dispatcher();
const Store = require('./store');

AppDisPatCher.register(function (action) {
    switch (action.actionType) {
        case "ADD_NEW_STATUS":
            Store.changeStatus(action.text);
            Store.emitChange();
            break;
        default:
            //None
    }
});

module.exports = AppDisPatCher;