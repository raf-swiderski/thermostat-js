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
        for (var i = 0; i < 11; i++) {
            thermostat.decreaseTemp(); 
        }
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

    it('has a max temperature of 32 degrees, if power-saving mode is off', function() {
        thermostat.temperature = 32;
        thermostat.increaseTemp();
        expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
    it('has a reset function where the temperature is set back to default (20)', function(){
        for (var i = 0; i < 11; i++) {
            thermostat.increaseTemp(); 
        }
        thermostat.resetTemp();
        expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
    //You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
    describe('shows the current energy usage', function() {
        it('shows low usage when the tempurature is below 18', function() {
            for (var i = 0; i < 5; i++) {
                thermostat.decreaseTemp(); 
            }
            expect(thermostat.getCurrentEnergyUsage()).toEqual('Low Usage');
        });
        it('shows medium usage when the tempurature is between 18 and 25', function() {
            expect(thermostat.getCurrentEnergyUsage()).toEqual('Medium Usage');
        });
        it('shows high usage when the tempurature is above 25', function() {
            for (var i = 0; i < 14; i++) {
                thermostat.increaseTemp(); 
            }
            expect(thermostat.getCurrentEnergyUsage()).toEqual('High Usage');
        });
    });
});