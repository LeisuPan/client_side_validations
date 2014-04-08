module('Form Validate Fail Callback', {
  setup: function() {
    new_user = {
      type: 'ActionView::Helpers::FormBuilder',
      input_tag: '<div class="field_with_errors"><span id="input_tag" /><label for="user_name" class="message"></label></div>',
      label_tag: '<div class="field_with_errors"><label id="label_tag" /></div>'
    }

    $('#qunit-fixture')
      .append($('<span id="result" />'))
      .append($('<form />', {
        action: '/users',
        'data-validate': true,
        method: 'post',
        id: 'new_user'
      }))
      .find('form')
        .append($('<input />', {
          name: 'user[name]',
          id: 'user_name',
          'data-validators': '{presence:{message: "must be present"}}',
          type: 'text'
        }))
        .append($('<label for="user_name">Name</label>'));

    clientSideValidations.formValidateFail = function(form, message) {
      $('#result').text('Form Validate Fail ' + form.attr('id'));
    }
  },
  teardown: function() {
    clientSideValidations.formValidateFail = function(form) {}
  }
});

test('runs callback', function() {
  var form = $('form'), input = form.find('input');

  equal($('#result').text(), '');

  form.submit();
  equal($('#result').text(), 'Form Validate Fail new_user');

  $('#result').text('');
  input.val('test');
  input.trigger('change');
  form.submit();
  equal($('#result').text(), '');
});

