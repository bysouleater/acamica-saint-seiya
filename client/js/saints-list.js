$(function() {
  // Backend Urls
  const server = 'http://localhost:3000';
  const saintsListEndpoint = server + '/saints';

  // HTML Selectors
  const $saintsListDiv = $('#saints-lists');
  const $saintTemplateDiv = $('#saint-template');

  // Mostrar lista completa de saints
  $.getJSON(saintsListEndpoint, function( data ) {
    data.forEach((saint) => {
      const $saintTemplate = $saintTemplateDiv.find('.col').clone();

      $saintTemplate.find('.card-title').text(saint.name);
      $saintTemplate.find('.saint-hp').text('HP: ' + saint.initialMaxHP);
      $saintTemplate.find('.saint-atk').text('ATK: ' + saint.initialATK);
      $saintTemplate.find('.saint-def').text('DEF: ' + saint.initialDEF);
      $saintTemplate.find('img').attr('src', saint.picture);
      
      $saintTemplate.appendTo($saintsListDiv);
    });
  });
});
