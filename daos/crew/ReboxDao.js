const AbstractDao               = require('./AbstractDao')
const {CrewModels}              = require('../../../lu-admob-server/src/models/index')

class RedboxDao extends AbstractDao {
  constructor() {
    super(CrewModels.redbox)
  }
}

module.exports = RedboxDao;