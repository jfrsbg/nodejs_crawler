var cFunctions = require("../utils/crawlerFunctions");

function searchItems(req, res, next) {
    
    cFunctions.scrap(res, req.body.search, req.body.limit, next)

    //next()
}

module.exports = {
    searchItems: searchItems,
}