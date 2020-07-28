var Crawler = require("crawler");
var URL = 'http://www.amazon.com'

function scrap(resApi, next){
    var c = new Crawler({
        maxConnections : 10,
        // This will be called for each crawled page
        callback : function (error, res, done) {
            if(error){
                console.log(error);
            }else{
                var $ = res.$;
                // $ is Cheerio by default
                //a lean implementation of core jQuery designed specifically for the server
                console.log($("title").text());

                next()
            }
            done();
        }
    });

    c.queue(URL);
    
}

module.exports = {
    scrap: scrap,
}