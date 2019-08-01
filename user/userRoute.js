
// ===================================Load Internal Modules================================================================================
const userRouter = require("express").Router()
const userFacade = require('./userFacade')

//  ====================================Load Modules End======================================================================

// ***************************************for admin pannel*****************************************************************

/**calling facade addTask function from route */
userRouter.route('/addTask')
    .post((req, res) => {
        userFacade.addTask(req, res).then((result) => {
            return res.send(result)
        })
    });

/**calling facade get Task Details function from route */
userRouter.route('/getTaskList')
    .get((req, res) => {
        userFacade.getTaskList(req, res).then((result) => {
            return res.send(result)
        })
    });

/**calling facade get Task Details function from route */
userRouter.route('/completeTask/:id')
    .put((req, res) => {
        userFacade.completeTask(req, res).then((result) => {
            return res.send(result)
        })
    });

/**calling facade updateTask function from route */
userRouter.route('/updateTask/:id')
    .put((req, res) => {
        userFacade.updateTask(req, res).then((result) => {
            return res.send(result)
        })
    });

// =====================================================EXPORT Module========================================================================  
// EXPORT userRouter  
module.exports = userRouter;