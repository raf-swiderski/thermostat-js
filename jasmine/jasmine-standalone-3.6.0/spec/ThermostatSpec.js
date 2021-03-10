'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  
  it('can be turned up by X degrees', function() {
    thermostat.increaseTemp();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('can be turned down by X degrees', function() {
    thermostat.decreaseTemp();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

});