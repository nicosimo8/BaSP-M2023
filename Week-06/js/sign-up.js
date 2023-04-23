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
  var nameLabel = document.querySelector('label[for="first-name"]');
  var lastNameLabel = document.querySelector('label[for="last-name"]');
  var dniLabel = document.querySelector('label[for="dni"]');
  var dateBirthLabel = document.querySelector('label[for="date-birth"]');
  var phoneLabel = document.querySelector('label[for="phone"]');
  var adressLabel = document.querySelector('label[for="adress"]');
  var cityLabel = document.querySelector('label[for="city"]');
  var postalCodelLabel = document.querySelector('label[for="postal-code"]');
  var emailLabel = document.querySelector('label[for="email"]');
  var passwordLabel = document.querySelector('label[for="password"]');
  var passwordRepeatLabel = document.querySelector('label[for="password-repeat"]');
  var errorWarning = document.getElementsByClassName('sign-up-form-error');
  var form = document.getElementById('sign-up-form');

  var formFieldElements = document.querySelectorAll('form fieldSet');
  var formLabelElements = document.querySelectorAll('form label');
  var formInputElements = document.querySelectorAll('form input');

  //oninput methods
  function dateWriting(e){ ///////////////REVIEW!!!!!!///////////////
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
  };

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

  function nameValidationError(){

  };

  //inputs validation
  function errorLabelAdd(errorString, labelIndex){
    formInputElements[0].classList.add('warningAsterisk');
    var errorLabel = document.createElement('p');
    errorLabel.className = 'sign-up-form-field-error';
    errorLabel.appendChild(document.createTextNode(errorString));
    formFieldElements[labelIndex].appendChild(errorLabel);
  }

  function inputValidationCheck(e){
    e.preventDefault();
    //name field
    if(formInputElements[0].value.length < 3){
      errorLabelAdd('Must contain at least 3 characters', 0);
    };
    //last name field
    if(formInputElements[1].value.length < 3 || formInputElements[1].value.length > 12){
      errorLabelAdd('Must contain at least 3 and less than 12 characters', 1);
    };
    //dni field
    if(formInputElements[2].value.length <= 7 || formInputElements[2].value.length > 10){
      errorLabelAdd('Must contain at least 3 and less than 10 characters', 2);
    };
    //date of birth field
    if(typeof formInputElements[4] != 'number'){
      errorLabelAdd('Only number allowed', 4);
    };
    //phone field
    if(typeof formInputElements[4] != 'number'){
      errorLabelAdd('Only number allowed', 4);
    };
  };

  function emailValidationCheck(e){
    e.preventDefault();
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailValue = emailInput.value;
    if(emailExpression.test(emailValue) != true){

    }else{
      alert('Log-In success!');
    };
  };

  form.addEventListener('submit', inputValidationCheck);
};