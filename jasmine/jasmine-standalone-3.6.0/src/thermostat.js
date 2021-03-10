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
        } else if (this.temperature === 32 && this.powerSavingMode === false) {
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
    resetTemp() {
        this.temperature = 20;
    };
    getCurrentEnergyUsage() {
        if (this.temperature < 18) {
            return 'Low Usage'
        } else if (this.temperature >= 18 && this.temperature <= 25) {
            return 'Medium Usage'
        } else {
            return 'High Usage'
        }
    }
    

};