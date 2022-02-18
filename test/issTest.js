const { assert } = require('chai');
const { fetchMyIP,fetchCoordsByIP, fetchISSFlyOverTimes} = require('../iss');

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
  it('return Object with latitude and logitude when passed an IP address',(done) => {
    fetchCoordsByIP('162.245.144.188',(error,coords) => {
      
      assert.equal(error,null);
      assert.deepEqual(coords,{latitude: 49.2643, longitude: -123.0961});
      done();
    })
  });

});

describe("fetchISSFlyOverTimes", () => {
  it('return pass over times when given latitude and logitude object',(done) => {
    fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' },(error,flyover) => {
      // can't compare latitude and longitude because it changes
      assert.equal(error,null);
      assert.lengthOf(flyover,5);
      done();
    })
  });

});