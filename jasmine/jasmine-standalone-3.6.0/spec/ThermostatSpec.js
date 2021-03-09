describe("Thermostat", function(){

    var thermostat;
    beforeEach(function(){
        thermostat = new Thermostat();
    })

    it("has a default tempurature of 20 degrees", function(){
        expect(thermostat.tempurature).toEqual(20);
    });
});