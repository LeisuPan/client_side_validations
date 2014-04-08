module('Presence Validator');

test('when value is not empty', function() {
  var element = $('<input type="text" />');
  var validator = { message: "failed validation" };
  element.val('not empty');
  equal(clientSideValidations.validators.presence(validator, element), undefined);
});

test('when value is empty', function() {
  var element = $('<input type="text" />');
  var validator = { message: "failed validation" };
  equal(clientSideValidations.validators.presence(validator, element), "failed validation");
});

