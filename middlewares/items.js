var Crawler = require("crawler");

function searchItems(req, response, next) {
    
    var URL = 'https://lista.mercadolivre.com.br/'

    var c = new Crawler({
        maxConnections : 10,
        
        callback : function (error, res, done) {
            if(error){
                console.log(error);
            }else{
                //cheerio is $ to emulate a jquery reference
                var $ = res.$;

                //create an empty array of items
                var items = []
                
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

                    //adding items to array
                    items.push({
                        name: title,
                        link: link,
                        price: price,
                        store: "",
                        state: ""
                    });
                });

                response.data = items
            
                next()
            }
            done();
        }
    });

    c.queue(URL+req.body.search.split(" ").join("-"));
}

module.exports = {
    searchItems: searchItems,
}