class Thermostat {
    constructor() {
        this.temperature = 20;
    }
    getCurrentTemperature() {
        return this.temperature;
    }
    increaseTemp() {
        this.temperature += 1;
        return this.temperature;
    }
    decreaseTemp() {
        this.temperature -= 1;
        return this.temperature;
    }
};