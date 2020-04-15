$(function() {
  // Backend Urls
  const server = 'http://localhost:3000';
  const saintsListEndpoint = server + '/users';
  
  const getDeleteSaintsEndpoint = function (id) {
    return server + '/users/' + id + '/saints';
  };

  const getDeleteUserEndpoint = function (id) {
    return server + '/users/' + id;
  };

  const getUpdateUserEndpoint = function (id) {
    return server + '/users/' + id;
  };

  // HTML Selectors
  const $usersListDiv = $('#users-lists');
  const $userTemplateDiv = $('#user-template');


  // Mostrar lista completa de saints
  $.getJSON(saintsListEndpoint, function( data ) {
    data.forEach((user) => {
      const $userTemplate = $userTemplateDiv.find('.col').clone();

      $userTemplate.find('#user-email').val(user.email);
      $userTemplate.find('.view-saints a').attr('href', '/client/user.html?id=' + user.id);

      // Bind delete saints button
      $userTemplate.find('#delete-saints-btn').click(function() {
        $.ajax({
          url: getDeleteSaintsEndpoint(user.id),
          method: 'DELETE',
          success: function() {
            alert('El usuario ya no tiene mas saints');
          }
        });
      });

      // Bind delete user button
      $userTemplate.find('#delete-user-btn').click(function() {
        $.ajax({
          url: getDeleteUserEndpoint(user.id),
          method: 'DELETE',
          success: function() {
            alert('El usuario fue eliminado');
          }
        });
      });

      // Bind update user button
      $userTemplate.find('#update-user-btn').click(function() {
        let newEmail = $userTemplate.find('#user-email').val();

        $.ajax({
          url: getUpdateUserEndpoint(user.id),
          method: 'PUT',
          data: {
            email: newEmail
          },
          success: function() {
            alert('El usuario fue actualizado');
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
