const AbstractDao               = require('./AbstractDao')
const {CrewModels}              = require('../../../lu-admob-server/src/models/index')

class UpdatesDao extends AbstractDao {
    constructor() {
        super(CrewModels.updates)
    }
}

module.exports = UpdatesDao;