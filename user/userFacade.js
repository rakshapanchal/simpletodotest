// ========================================Load Internal Modules========================================================

const userService = require('./userService')

// ==========================================End Load Modules=============================================================


/**calling service  addTask function from facade  */
function addTask(req, res) {
    return userService.addTask(req, res)
        .then((result) => {
            return result;
        })
}

/**calling service  getTaskList function from facade  */
function getTaskList(req, res) {
    return userService.getTaskList(req, res)
        .then((result) => {
            return result;
        })
}

/**calling service  completeTask function from facade  */
function completeTask(req, res) {
    return userService.completeTask(req, res)
        .then((result) => {
            return result;
        })
}

/**calling service updateTask function from facade  */
function updateTask(req, res) {
    return userService.updateTask(req, res)
        .then((result) => {
            return result;
        })
}
// ======================================Export Modules=================================================================

module.exports = {
    addTask,/**calling service addTask function  */

    getTaskList,/**calling service  getTaskList function from facade  */

    completeTask,/**calling service completeTask function from facade */

    updateTask/**calling service editItem function from facade  */
}