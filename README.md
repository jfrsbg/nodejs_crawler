# Crawler NodeJS
Crawler to search items on mercado livre


### Getting Started
Clone the repository, enter in the directory and type 'npm run dev' to run in debug mode

### Making requests
This project has only one endpoint and you can access the live example on ml-nodejs-webcrawler.appspot.com/items/search sending a POST HTTP request with the following body:

```
{
    "search": "fone",
    "limit": 30
}
```
Where 'search' is the keyword to search an item and 'limit' is the amount of items that you want to receive

### Logs
You can see http logs in logs/info.log to get some information of who is requesting the endpoint

### Tests
you can execute or write more test and execute them with 'mocha'. To do this, just enter in the directory and type 'mocha'