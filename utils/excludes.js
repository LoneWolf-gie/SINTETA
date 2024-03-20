function exclude(obj, fieldsToExclude) {
    const result = { ...obj };

    fieldsToExclude.forEach(field => {
        delete result[field];
    });

    return result;
}

module.exports = exclude;