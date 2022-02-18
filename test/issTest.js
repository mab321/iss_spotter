const { assert } = require('chai');
const { fetchMyIP,fetchCoordsByIP } = require('../iss');

describe("fetchmyIP", () => {
  it('return IP address',(done) => {
    fetchMyIP((error,ip) => {
      
      assert.equal(error,null);
      assert.strictEqual('172.103.236.107',ip);
      done();
    })
  });
});

describe("fetchmyCoordsByIP", () => {
  it('return IP address',(done) => {
    fetchCoordsByIP('162.245.144.188',(error,coords) => {
      
      assert.equal(error,null);
      assert.deepEqual(coords,{latitude: 49.2643, longitude: -123.0961});
      done();
    })
  });

});