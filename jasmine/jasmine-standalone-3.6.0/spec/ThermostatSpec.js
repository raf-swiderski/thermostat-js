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

  it('has a minimum temperature of 10', function() {
      thermostat.temperature = 10;
      thermostat.decreaseTemp();
      expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a max temperature of 25 degrees, if power-saving mode is on', function() {
      thermostat.powerSavingMode = true;
      thermostat.temperature = 25;
      thermostat.increaseTemp();
      expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('power-saving mode is off by default', function() {
      expect(thermostat.powerSavingMode).toBeFalsy();
  });

  it('power-saving mode can be toggled on and off', function() {
      thermostat.togglePowerSavingMode();
      expect(thermostat.powerSavingMode).toBeTruthy();
  });


});