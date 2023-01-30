const chai = require("chai")
const httpChai = require("chai-http")
const app = require("../app")
chai.use(httpChai)

describe('API tests', ()=>{
    it('testing the get all projects endpoint', (done)=>{
        chai.request(app)
        .get('/')
        .end((error,response)=>{
            chai.expect(response.status).equal(200)
            chai.expect(response.body).to.be.an('array')
            chai.expect(response.body).length.to.be.greaterThan(0)
            done()
        })
    })
});