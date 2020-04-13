$(function() {
  // Backend Urls
  const server = 'http://localhost:3000';
  const randomSaintsEndpoint = server + '/saints/random';
  const getSaintsForUserEndpoint = function (id) {
    return server + '/users/' + id + '/saints';
  };
  const getClaimSaintsEndpoint = function (id) {
    return server + '/users/' + id + '/claim';
  };

  // HTML Selectors
  const $saintsListDiv = $('#saints-lists');
  const $saintTemplateDiv = $('#saint-template');
  const $userEmailHeader = $('#user-email');
  const $randomSaintDisplay = $('#random-saint-display');
  const $randomSaintButton = $('#random-saint-button');
  const $claimSaintButton = $('#claim-saint-button');
  
  let randomSaintId = null;

  let urlParams = new URLSearchParams(window.location.search);
  let userId = parseInt(urlParams.get('id'));

  const saintsForUserUrl = getSaintsForUserEndpoint(userId);

  // Mostrar lista completa de saints
  $.getJSON(saintsForUserUrl, function( data ) {
    
    $userEmailHeader.text(data.email);
    
    data.saints.forEach((saint) => {
      const $saintTemplate = $saintTemplateDiv.find('.col').clone();

      $saintTemplate.find('.card-title').text(saint.qty + 'x' + ' ' + saint.name);
      $saintTemplate.find('.saint-hp').text('HP: ' + saint.initialMaxHP);
      $saintTemplate.find('.saint-atk').text('ATK: ' + saint.initialATK);
      $saintTemplate.find('.saint-def').text('DEF: ' + saint.initialDEF);
      $saintTemplate.find('img').attr('src', saint.picture);
      
      $saintTemplate.appendTo($saintsListDiv);
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
    const body = { 'saint': randomSaintId };

    $.post(url, body, function (responseBody) {
      console.log('El usuario reclamo al saint correctamente');
    });
  });
});
