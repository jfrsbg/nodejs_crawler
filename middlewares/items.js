function searchItems(req, res, next) {
    
    res.data = [{
        name: 1,
        link: "as",
        price: 123,
        store: 444,
        state: "asdasd"
    },
    {
        name: 1,
        link: "as",
        price: 123,
        store: 444,
        state: "asdasd"
    }]

    next()
}

module.exports = {
    searchItems: searchItems,
}