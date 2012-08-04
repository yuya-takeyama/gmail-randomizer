/* Author: Yuya Takeyama

*/
jQuery(document).ready(function () {
  var $ = jQuery;

  var $account = $('#account')
    , $result         = $('#result')
    , $mail_with_plus = $('#mail_with_plus')
    , $mail_with_dots = $('#mail_with_dots');

  $result.hide();
  $account.val(localStorage.getItem('account'));

  var createArray = function (len) {
    result = [];
    for (var i = 0; i < len; i++) {
      result.push(null);
    }
    return result;
  };

  var randStr = (function () {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    return function (len) {
      return (createArray(8)).reduce(function (str, chr) {
        return str + chars[Math.floor(Math.random() * chars.length)];
      }, '');
    };
  })();

  $('#randomizer').on('submit', function (event) {
    event.preventDefault();
    $result.show();

    localStorage.setItem('account', $account.val());

    var account = $account.val().split('').reduce(function (str, chr) {
      return str + (createArray(parseInt(Math.random() * 3)).join('.')) + chr;
    });

    $mail_with_plus.text($account.val() + '+' + randStr(8) + '@gmail.com');
    $mail_with_dots.text(account + '@gmail.com');
  });
});
