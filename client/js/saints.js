$(function() {
  const server = 'http://localhost:3000';
  const saintsListEndpoint = server + '/saints';
  const $saintsListDiv = $('.saints-lists');


  $.getJSON(saintsListEndpoint, function( data ) {
    data.forEach((saint) => {
      const saintText = 'Nombre: ' + saint.name + 
        ' Max HP: ' + saint.initialMaxHP + 
        ' ATK: ' + saint.initialATK +
        ' DEF: ' + saint.initialDEF;

      $('<div>').text(saintText).appendTo($saintsListDiv);
    });
  });
});
