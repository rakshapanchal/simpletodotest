
// ========================================Load Internal Modules========================================================

let BaseDao = require('../dao/baseDao');
const userModel = require('./userModel')
const userDao = new BaseDao(userModel);

// ==========================================End Load Modules=============================================================

/**for add task
 * 
 * @param {object} data taskDetails
 */
function addTask(data) {
    let taskData = new userModel(data)
    return userDao.save(taskData).then((result) => {
        return result;
    })
}

/**for get all active task list */
function getAllTask(query) {
    return userDao.find(query).then((result) => {
        return result;
    })
}

/**for update task details
 * 
 * @param {string} query taskId
 * @param {object} data  updateData
 */
function updateTask(query, data) {
    let option = { new: true }
    return userDao.findOneAndUpdate(query, data, option).then((result) => {
        return result;
    })
}

// ======================================Export Modules=================================================================

module.exports = {
    addTask,/**for add task*/

    getAllTask,/**for get all active task list */

    updateTask/**for update task details*/
}