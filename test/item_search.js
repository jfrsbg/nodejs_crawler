var axios = require("axios");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:3000/items/search";

describe("Testing API crawler ml",function(){
  var limit = 30
  var search = "fone de ouvido"

  it("Should receive the same quantity of items as requested on limit param",function(done){
    this.timeout(10000);//timeout para o teste

    axios.post(urlBase, {
      search: search,
      limit: limit
    })
    .then(function (response){

      // verifying if the result of request is 200
      expect(response.status).to.equal(200);


      //verifying quantity of items
      expect(response.data).to.have.lengthOf.at.most(limit);

      done(); 
    })
  })

  it("Verifying the properties of items",function(done){
    this.timeout(10000);//timeout para o teste

    axios.post(urlBase, {
      search: search,
      limit: limit
    })
    .then(function (response){

      // verifying if the result of request is 200
      expect(response.status).to.equal(200);

      //verifying if the length is at least 1
      expect(response.data).to.have.lengthOf.at.least(1);

      expect(response.data[0]).to.have.property("name")
      expect(response.data[0]).to.have.property("link")
      expect(response.data[0]).to.have.property("price")
      expect(response.data[0]).to.have.property("store")
      expect(response.data[0]).to.have.property("state")

      done(); 
    })
  })
});