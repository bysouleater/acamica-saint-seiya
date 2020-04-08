$(function() {
  // Backend Urls
  const server = 'http://localhost:3000';
  const saintsListEndpoint = server + '/saints';
  const randomSaintsEndpoint = server + '/saints/random';
  const getClaimSaintsEndpoint = function (id) {
    return server + '/users/' + id + '/claim';
  };

  // HTML Selectors
  const $saintsListDiv = $('.saints-lists');
  const $randomSaintDisplay = $('#random-saint-display');
  const $randomSaintButton = $('#random-saint-button');
  const $claimSaintButton = $('#claim-saint-button');
  
  let randomSaintId = null;
  let userId = 1;

  // Mostrar lista completa de saints
  $.getJSON(saintsListEndpoint, function( data ) {
    data.forEach((saint) => {
      const saintText = 'Nombre: ' + saint.name + 
        ' Max HP: ' + saint.initialMaxHP + 
        ' ATK: ' + saint.initialATK +
        ' DEF: ' + saint.initialDEF;

      $('<img src="' + saint.picture + '">').appendTo($saintsListDiv);
      $('<div>').text(saintText).appendTo($saintsListDiv);
    });
  });

  // Obtener un saint al azar
  $randomSaintButton.click(function (event) {
    $.getJSON(randomSaintsEndpoint, function( responseBody ) {
      const saintText = 'Nombre: ' + responseBody.name + 
        ' Max HP: ' + responseBody.initialMaxHP + 
        ' ATK: ' + responseBody.initialATK +
        ' DEF: ' + responseBody.initialDEF;

      $randomSaintDisplay.text(saintText);
      randomSaintId = responseBody.id;
    });
  });

  // Claimear un saint
  $claimSaintButton.click(function (event) {
    const url = getClaimSaintsEndpoint(userId);
    const body = JSON.stringify({ 'saint': randomSaintId });

    $.ajax({
      type: 'POST',
      url: url,
      data: body,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (responseBody) {
        console.log('El usuario reclamo al saint correctamente');
      }
    });
  });
});
