$.noConflict();
jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.
  $('#title').fadeIn(1500);
  $._messengerDefaults = {
    extraClasses: 'messenger-fixed messenger-theme-flat messenger-on-bottom'
  }
  $('#btn_login').click(function(event) {
    event.preventDefault();
    Messenger().post({
      message: "How's it going?",
      type: "error",
      showCloseButton: true
    })
    console.info($('#login-name').val());
    if ($('#login-name').val()=="") {
      $('#login-name').addClass('has-error');
      $('#label_name').addClass('has-error');
      return false;
    }
    if ($('#login-pass').val()=="") {
      $('#login-pass').addClass('has-error');
      $('#label_pass').addClass('has-error');
      return false;
    }
  });
  $('input').on('change', function(event) {
    $(this).removeClass('has-error');
    $(this).next().removeClass('has-error');
  });
});