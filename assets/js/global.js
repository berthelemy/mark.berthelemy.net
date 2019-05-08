var set_locale_to = function(locale) {
      if (locale) {
        $.i18n().locale = locale;
    }
    $('body').i18n();
    };
 
    jQuery(function() {
      $.i18n().load( {
        'en': './assets/js/i18n/en.json',
        'fr': './assets/js/i18n/fr.json'
      } ).done(function() {
        set_locale_to(url('?locale'));
 
        History.Adapter.bind(window, 'statechange', function(){
          set_locale_to(url('?locale'));
        });
 
        $('.switch-locale').on('click', 'a', function(e) {
          e.preventDefault();
          History.pushState(null, null, "?locale=" + $(this).data('locale'));
        });
      });
    });

$("#contact-form").validate();

$(function() {
        $('.lazy').lazy();
    });
