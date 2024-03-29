"use strict";


//========================== Class Definitions Start =====================

class BaseDao {
    constructor(dbModel) {
        //Get Model
        this.Model = dbModel;
    }
    save(object) {
        return this.Model.create(object);
    }

    findOne(query, projection) {
        return this.Model.findOne(query, projection)
    }

    find(query, projection) {
        return this.Model.find(query, projection)
    }

    findOneAndUpdate(query, update, options) {
        return this.Model.findOneAndUpdate(query, update, options).exec();
    }

    findAndModify(query, update, options) {
        return this.Model.findAndModify(query, update, options).exec();
    }

    paginate(query, options) {
        return this.Model.paginate(query, options)
    }

    /**
     * Update Given Model
     * @param query
     * @param toUpdate
     * @return Promise Object
     * @private
     */
    update(query, update, options) {
        if (!options) {
            options = {};
        }
        return this.Model.update(query, update, options).exec();
    }

    remove(query, options) {
        return this.Model.remove(query, options).exec();
    }

    findByIdAndRemove(query, options) {
        return this.Model.findByIdAndRemove(query, options).exec();
    }

    aggregate(aggPipe) {
        return this.Model.aggregate(aggPipe).exec();
    }

}
//========================== Class Definitions End =====================


//========================== Helper methods start =======================

//========================== Helper methods end =======================

//========================== Export module start =======================

module.exports = BaseDao;

//========================== Export module End =======================
