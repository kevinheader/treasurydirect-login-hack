var passwordInputs = document.getElementsByName('password');
if (passwordInputs.length == 1) {
    passwordInputs[0].readOnly = false;
    passwordInputs[0].className = passwordInputs[0].className.replace(new RegExp('(?:^|\\s)'+ 'pwordinput' + '(?:\\s|$)'), ' ');

    var virtualKeyboard = document.getElementById('virtual_keyboard');
    if (virtualKeyboard) {
        virtualKeyboard.outerHTML = "";
        delete element;
    }
}