const assert = require('assert')
const Taxi = require('../taxi.js')

describe('Taxi', function() {

  let taxi
  let passenger

  beforeEach(function() {
    taxi = new Taxi('Toyota', "Prius")
    passenger = new Passenger('Phillip')
  })

  it('should have a manufacturer', function() {
    const taxi = new Taxi('Toyota', 'Prius')
    const actual = taxi.manufacturer
    assert.strictEqual(actual, 'Toyota')
  })
  it('should have a model', function() {
    const taxi = new Taxi('Toyota', 'Prius');
    const actual = taxi.model;
    assert.strictEqual(actual, 'Prius')
  })

  describe('passengers', function(){

    it('should have passengers', function(){
      const actual = taxi.passengers
      assert.deepStrictEqual(actual, [])
    })

    it('should be able to count passengers', function() {
      const actual = taxi.passengers.length

      assert.deepStrictEqual(actual, )
    })

    it('should be able to add one passenger', function() {

      assert.deepStrictEqual(actual, )
    })

    it('should have no passengers', function(){

      assert.deepStrictEqual(actual, )
    })

    it('should be able to remove passenger by name', function() {

      assert.deepStrictEqual(actual, )
    })

  })

})
