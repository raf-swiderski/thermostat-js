class Thermostat {
    constructor() {
        this.temperature = 20;
        this.powerSavingMode = false;
    }
    getCurrentTemperature() {
        return this.temperature;
    }
    increaseTemp() {
        if (this.temperature === 25 && this.powerSavingMode === true) {
            return this.temperature
        } else {
            this.temperature += 1;
        return this.temperature;
        }
    }
    decreaseTemp() {
        if (this.temperature === 10) {
            return this.temperature
        } else {
            this.temperature -= 1;
            return this.temperature;
        }
    }
    togglePowerSavingMode() {
        return this.powerSavingMode = !this.powerSavingMode
    };
    

};