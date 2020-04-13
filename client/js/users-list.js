$(function() {
  // Backend Urls
  const server = 'http://localhost:3000';
  const saintsListEndpoint = server + '/users';
  
  const getDeleteSaintsEndpoint = function (id) {
    return server + '/users/' + id + '/saints';
  };

  // HTML Selectors
  const $usersListDiv = $('#users-lists');
  const $userTemplateDiv = $('#user-template');


  // Mostrar lista completa de saints
  $.getJSON(saintsListEndpoint, function( data ) {
    data.forEach((user) => {
      const $userTemplate = $userTemplateDiv.find('.col').clone();

      $userTemplate.find('.card-title').text(user.email);
      $userTemplate.find('.view-saints a').attr('href', '/client/user.html?id=' + user.id);

      $userTemplate.find('#delete-saints-btn').click(function() {
        $.ajax({
          url: getDeleteSaintsEndpoint(user.id),
          method: 'DELETE',
          success: function() {
            alert('El usuario ya no tiene mas saints');
          }
        });
      });
      
      $userTemplate.appendTo($usersListDiv);
    });
  });


  $('#new-user-form').ajaxForm({
    url: saintsListEndpoint, 
    type: 'post',
    success: function() {
      return false;
    }
  });
});
