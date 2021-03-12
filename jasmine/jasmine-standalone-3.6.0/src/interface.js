$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();
  
    $('#temperature-up').click(function() {
      thermostat.increaseTemp();
      updateTemperature();
    });
  
    $('#temperature-down').click(function() {
      thermostat.decreaseTemp();
      updateTemperature();
    });
  
    $('#temperature-reset').click(function() {
      thermostat.resetTemp();
      updateTemperature();
    });
  
    $('#powersaving-on').click(function() {
      thermostat.powerSavingModeOn();
      $('#power-saving').text('on')
      updateTemperature();
    })
  
    $('#powersaving-off').click(function() {
      thermostat.powerSavingModeOff();
      $('#power-saving').text('off')
      updateTemperature();
    })
  
    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
    };
  });