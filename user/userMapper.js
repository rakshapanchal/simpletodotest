// ===============================Load Internal Modules==================================================================


/**update,get,delete  category & subCategory response
 * 
 * @param {*Object} result response updated data of category and subCategory
 * @param {*string} message msg for perticular query
 */
function response_Mapping(message, result) {
    var responseObj = {
        "responsecode": 200,
        "responseMessage": message,
        "result": result

    }
    return responseObj
}

/**Bed Request Response
 * 
 * @param {*string} message response message
 */
function bedRequestRes(message) {
    var responseObj = {
        "responsecode": 400,
        "responseMessage": message,
    }
    return responseObj;
}

/**Permission Denied Response */
function forBidden() {
    var responseObj = {
        "responsecode":401,
        // "responseMessage": permissionDenied
    }
    return responseObj;
}

/**Data Not Found response */
function dataNotFound() {
    var responseObj = {
        "responsecode": 404,
        // "responseMessage": restaurantMsg.dataNotFound
    }
    return responseObj;
}

/**for handle internal server error*/
function internalError() {
    var responseObj = {
        "responsecode":500,
        // "responseMessage": restaurantMsg.internalError
    }
    return responseObj;
}
// ========================================EXPORT Module============================================================================

module.exports = {

    response_Mapping,/**for get restaurant details*/

    bedRequestRes,/**Bed Request Response */

    dataNotFound,/**Data Not Found response */

    forBidden,  /**Permission Denied Response */

    internalError,/**for handle internal server error */

}