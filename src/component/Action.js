const AppDisPatCher = require('./dispatcher');

const Action = {

    addNewText:function (text) {
        AppDisPatCher.dispatch({
            actionType:'ADD_NEW_STATUS',
            text :text
        })
    }

};

module.exports = Action;