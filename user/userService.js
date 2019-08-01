
// ========================================Load Internal Modules========================================================

const userDao = require('./userDao')
const userMapper = require('./userMapper')


// ==========================================End Load Modules=============================================================

/**for add task details*/
function addTask(req, res) {
    let taskDetails = req.body
    return userDao.addTask(taskDetails).then((result) => {
        return userMapper.response_Mapping("task added successfully", result);
    }).catch((err) => {
        return userMapper.internalError();
    })
}

/**for get all active task list */
function getTaskList(req, res) {
    return userDao.getAllTask({ isActive: true }).then((result) => {
        console.log(result)
        if (!result) {
            return userMapper.dataNotFound("Task not found");
        }
        return userMapper.response_Mapping("ok", result);

    })
}

/**for update task details */
function updateTask(req, res) {
    console.log("in jsajd", req.body)
    return userDao.updateTask({ _id: req.params.id }, { $set: req.body }).then((result) => {
        if (!result) {
            return userMapper.dataNotFound("Task not found");
        }
        return userMapper.response_Mapping("updated successfully", result);
    }).catch((err) => {
        return userMapper.internalError();
    })
}

/**for complete task list */
function completeTask(req, res) {
    return userDao.updateTask({ _id: req.params.id }, { isActive: false }).then((result) => {
        if (!result) {
            return userMapper.dataNotFound("Task not found");
        }
        return userMapper.response_Mapping("updated successfully", result);
    }).catch((err) => {
        return userMapper.internalError();
    })
}

// ======================================Export Modules=================================================================
module.exports = {
    addTask,/**for add task details*/

    getTaskList,/**for get all Task */

    updateTask,/**for update task details  */

    completeTask/**for complete task */
}