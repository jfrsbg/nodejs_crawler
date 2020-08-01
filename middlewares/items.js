var cheerio = require("cheerio");
var axios = require("axios");

async function searchItems(req, response, next) {
    var limit = req.body.limit
    
    //url of website
    var URL = 'https://lista.mercadolivre.com.br/'

    //create an empty array of items
    var items = []

    //condition to stop scraping the website
    while(items.length < limit){
        //you can jump the number of items that you already seen with the string "_Desde_51" for example
        var fullUrl = URL+req.body.search.split(" ").join("-")+`_Desde_${items.length}`
        console.log(fullUrl)

        var result = await axios.get(fullUrl)

        const $ = cheerio.load(result.data)

        //get each element of the list of products
        $(".results-item", "#searchResults").each(function(i, elem) {
            //getting price
            var priceValue = $(this).find(".price__fraction").text()
            var priceDecimal = $(this).find(".price__decimals").text()
            
            //getting title
            var title = $(this).find(".main-title").text().trim()
            //getting link
            var link = $(this).find("a").attr('href')
            //parsing price as float
            var price = parseFloat(`${priceValue}.${priceDecimal}`)

            //getting the state
            var state = $(this).find(".item__condition").text().trim()

            //adding items to array
            items.push({
                name: title,
                link: link,
                price: price,
                store: "",
                state: state
            });

            //when the quantity of items reach the limit, stop adding in array
            if(items.length == limit)
                return false
        });
    }

    //add items to the response
    response.data = items

    next()
}

module.exports = {
    searchItems: searchItems,
}