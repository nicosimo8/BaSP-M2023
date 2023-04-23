window.onload = function() {
  var nameInput = document.querySelector('input[name="first-name"]');
  var lastNameInput = document.querySelector('input[name="last-name"]');
  var dniInput = document.querySelector('input[name="dni"]');
  var dateBirthInput = document.querySelector('input[name="date-birth"]');
  var phoneInput = document.querySelector('input[name="phone"]');
  var adressInput = document.querySelector('input[name="adress"]');
  var cityInput = document.querySelector('input[name="city"]');
  var postalCodeInput = document.querySelector('input[name="postal-code"]');
  var emailInput = document.querySelector('input[name="email"]');
  var passwordInput = document.querySelector('input[name="password"]');
  var passwordRepeatInput = document.querySelector('input[name="password-repeat"]');
  var errorWarning = document.getElementsByClassName('sign-up-form-error');
  var form = document.getElementById('sign-up-form');

  var formFieldElements = document.querySelectorAll('form fieldSet');
  var formLabelElements = document.querySelectorAll('form label');
  var formInputElements = document.querySelectorAll('form input');

  //oninput methods
  /*function dateWriting(e){ ///////////////REVIEW!!!!!!///////////////
    var input = e;
    var template = 'xx/xx/xxxx';
    var n = 0;
    var str = '';
    var countN = 0;

    while (n < template.length) {
      if(countN > input.length - 1){
        template = template.substring(0, n);
        break;
      };

      if(template[n] == input[n]){
        n++;
        countN++;
        continue;
      };

      if(template[n] == 'x'){
        template = template.substring(0, n) + input[countN] + template.substring(n + 1);
        str += input[countN];
        countN++;
      };

      if(input.length == 3 || input.length == 5 && template[n] == '/'){
        template = template.substring(0, n) + '/' + input[countN] + template.substring(n + 1);
        str += '/' + input[countN];
        countN++;
      };

      n++
    };

    return str;
  };

  formInputElements[3].oninput = function() {
    formInputElements[3].value = dateWriting(formInputElements[3].value);
  };*/

  //onBlur Methods
  function errorCheckDisplay() {
    for(i = 0; i < (formLabelElements.length -3); i++){
      formLabelElements[i].classList.add('warningAsterisk');
    };
    errorWarning[0].innerText = '* fields are requiered';
    errorWarning[0].style.display = 'block';
  };

  nameInput.onblur = function() {
    if(nameInput.value == ''){
      errorCheckDisplay();
    };
  };

  lastNameInput.onblur = function() {
    if(lastNameInput.value == ''){
      errorCheckDisplay();
    };
  };

  dniInput.onblur = function() {
    if(dniInput.value == ''){
      errorCheckDisplay();
    };
  };

  dateBirthInput.onblur = function() {
    if(dateBirthInput.value == ''){
      errorCheckDisplay();
    };
  };

  phoneInput.onblur = function() {
    if(phoneInput.value == ''){
      errorCheckDisplay();
    };
  };

  adressInput.onblur = function() {
    if(adressInput.value == ''){
      errorCheckDisplay();
    };
  };

  cityInput.onblur = function() {
    if(cityInput.value == ''){
      errorCheckDisplay();
    };
  };

  postalCodeInput.onblur = function() {
    if(postalCodeInput.value == ''){
      errorCheckDisplay();
    };
  };

  emailInput.onblur = function() {
    if(emailInput.value == ''){
      errorCheckDisplay();
    };
  };

  passwordInput.onblur = function() {
    if(passwordInput.value == ''){
      errorCheckDisplay();
    };
  };

  passwordRepeatInput.onblur = function() {
    if(passwordRepeatInput.value == ''){
      errorCheckDisplay();
    };
  };

  //onFocus methods
  function errorCheckRemove(){
    for(i = 0; i < (formLabelElements.length -3); i++){
      formLabelElements[i].classList.remove('warningAsterisk');
    };
    errorWarning[0].style.display = 'none';
  };

  nameInput.onfocus = function() {
    errorCheckRemove();
  };

  lastNameInput.onfocus = function() {
    errorCheckRemove();
  };

  dniInput.onfocus = function() {
    errorCheckRemove();
  };

  dateBirthInput.onfocus = function() {
    errorCheckRemove();
  };

  phoneInput.onfocus = function() {
    errorCheckRemove();
  };

  adressInput.onfocus = function() {
    errorCheckRemove();
  };

  cityInput.onfocus = function() {
    errorCheckRemove();
  };

  postalCodeInput.onfocus = function() {
    errorCheckRemove();
  };

  emailInput.onfocus = function() {
    errorCheckRemove();
  };

  passwordInput.onfocus = function() {
    errorCheckRemove();
  };

  passwordRepeatInput.onfocus = function() {
    errorCheckRemove();
  };

  //inputs validation
  function errorLabelAdd(errorString, labelIndex) {
    formInputElements[0].classList.add('warningAsterisk');
    var errorLabel = document.createElement('p');
    errorLabel.className = 'sign-up-form-field-error added';
    errorLabel.appendChild(document.createTextNode(errorString));
    formFieldElements[labelIndex].appendChild(errorLabel);
  };

  function errorLabelRemove(){
    var formParagElements = document.querySelectorAll('form p');

    for(i = 0; i < (formParagElements.length); i++){
      if(formParagElements[i].classList.contains('added')){
        var element = formFieldElements[i - 1];
        while(element.children.length > 2) {
          element.removeChild(element.children[2]);
        }
      };
    };
  }

  function stringRunner(string) {
    var strMatch = 0;
    var numMatch = 0;
    var speMatch = 0;
    var spaces = 0;

    for(i = 0; i < string.length; i++) {
      if(string[i].search(/[a-z]/i) != -1) {
        strMatch ++;
      }else{
        if(string[i].search(/[0-9]/) != -1) {
          numMatch++;
        }else {
          speMatch ++;
          if(string[i].search(" ") != -1) {
            spaces++;
          };
        };
      };
    };

    var coincidences = [strMatch, numMatch, speMatch, spaces];

    return coincidences;
  };

  function inputValidationCheck(e) {
    e.preventDefault();

    //name field
    if(formInputElements[0].value.length < 3) {
      errorLabelAdd('Must contain at least 3 characters', 0);
    };

    //last name field
    if(formInputElements[1].value.length < 3 || formInputElements[1].value.length > 12) {
      errorLabelAdd('Must contain at least 3 and less than 12 characters', 1);
    };

    //dni field
    if(formInputElements[2].value.length <= 7 || formInputElements[2].value.length > 10) {
      errorLabelAdd('Must contain at least 3 and less than 10 characters', 2);
    };

    //date of birth field
    var birth = formInputElements[3].value;
    if(stringRunner(birth)[0] > 0 || stringRunner(birth)[2] > 0) {
      errorLabelAdd('Only numbers allowed', 3);
    };

    //phone field
    var phone = formInputElements[4].value;
    if(stringRunner(phone)[0] > 0 || stringRunner(phone)[2] > 0) {
      errorLabelAdd('Only numbers allowed', 4);
    };

    //adress field
    var adress = formInputElements[5].value;
    var position = adress.search(" ");

    if(stringRunner(adress)[0] + stringRunner(adress)[1] < 5) {
      errorLabelAdd('Must contain at least 5 characters', 5);
    };

    if(stringRunner(adress)[0] < 3 || stringRunner(adress)[1] < 2) {
      errorLabelAdd('Street name must contain at least 3 characters and number at least 2 characters', 5);
    };

    if(stringRunner(adress)[2] < 1) {
      if(stringRunner(adress)[3] < 1 || stringRunner(adress)[3] > 1) {
        errorLabelAdd('Must contain 1 space', 5);
      };
    };

    if(stringRunner(adress)[2] > 1) {
      if(stringRunner(adress[position - 1])[0] == 0 && stringRunner(adress[position + 1])[1] == 0){
        errorLabelAdd('Spaces must be between the street name and the number', 5);
      };
    };
    
    //city field
    var city = formInputElements[6].value;

    if(city.length < 3) {
      errorLabelAdd('Must contain at least 3 characters', 6);
    };

    if(stringRunner(city)[2] > 1 && stringRunner(city)[3] == 0) {
      errorLabelAdd('Only spaces allowed', 6);
    };

    //postal code field
    var postalCode = formInputElements[7].value;

    if(stringRunner(postalCode)[0] > 0 || stringRunner(postalCode)[2] > 0) {
      errorLabelAdd('Only numbers allowed', 7);
    };

    if(stringRunner(postalCode)[1] < 4 || stringRunner(postalCode)[1] > 5) {
      errorLabelAdd('Must contain 4 or 5 digits', 7);
    };

    //email field
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var email = formInputElements[8].value;

    if(emailExpression.test(email) != true) {
      errorLabelAdd('Must contain a valid format', 8);
    };

    //password field
    var pass = formInputElements[9].value;

    if(pass.length < 8 || pass.length > 12) {
      errorLabelAdd('Must contain between 8 and 12 characters', 10);
    };

    if(stringRunner(pass)[2] < 1){
      errorLabelAdd('Must contain at least 1 special character', 10);
    }

    //password repeat field
    var passRep = formInputElements[10].value;

    if(passRep != pass){
      errorLabelAdd('Passwords did not match', 11);
    }
  };

  form.addEventListener('submit', errorLabelRemove);
  form.addEventListener('submit', inputValidationCheck);
};