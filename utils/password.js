const bcrypt = require('bcrypt');

const passwordCompare = (data, ecrypted) => {
    if (bcrypt.compareSync(data, ecrypted)) {
        return true
    }
}

module.exports = {
    passwordCompare
}