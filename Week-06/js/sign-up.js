window.onload = function() {
  //elements
  var errorWarning = document.getElementsByClassName('sign-up-form-error');
  var form = document.getElementById('sign-up-form');
  var formFieldElements = document.querySelectorAll('form fieldSet');
  var formLabelElements = document.querySelectorAll('form label');
  var formInputElements = document.querySelectorAll('form input');

  //verification variables
  var errorCheck = true;
  var checkCounter = 0;

  //oninput methods//
  function dateWriting(e) { //Check why can't delete the inmediate '/' and adds additionals '/'
    /*var str = '';
    
    if(e.length == 2) {
      str = e + '/';
    }else if(e.length == 5) {
      str = e + '/'
    }else{
      str = e.substring(0, e.length);
    };

    if(e.length > 10) {
      str = e.substring(0, 10);
    }*/

    var input = e;
    var template = 'xx/xx/xxxx';
    var n = 0;
    var str = '';
    var countN = 0;

    while(n < template.length) {
      //stop writing
      if(countN > input.length - 1) {
        template = template.substring(0, n);
        break;
      };

      //concaten if match, add the digit to str variable
      if(template[n] == 'x') {
        template = template.substring(0, n) + input[countN] + template.substring(n + 1);
        str += input[countN];
        countN++;
      };

      //put slash in the string if it coincides
      if(template[n + 1] == '/') {
        template = template.substring(0, n + 1) + '/' + template.substring(n + 2);
        str = str + '/';
        countN++;
      };

      n++;
    };

    return str;
  };

  formInputElements[3].oninput = function() {
    formInputElements[3].value = dateWriting(formInputElements[3].value);
  };

  //onBlur Methods//
  function errorCheckDisplay() {
    for(i = 0; i < (formLabelElements.length -3); i++){
      formLabelElements[i].classList.add('warningAsterisk');
    };
    errorWarning[0].innerText = '* fields are requiered';
    errorWarning[0].style.display = 'block';
  };

    //name field
  formInputElements[0].onblur = function() {
    if(formInputElements[0].value == ''){
      errorCheckDisplay();
    };
  };

    //last name field
  formInputElements[1].onblur = function() {
    if(formInputElements[1].value == ''){
      errorCheckDisplay();
    };
  };

    //dni field
  formInputElements[2].onblur = function() {
    if(formInputElements[2].value == ''){
      errorCheckDisplay();
    };
  };

    //date of birth field
  formInputElements[3].onblur = function() {
    if(formInputElements[3].value == ''){
      errorCheckDisplay();
    };
  };

    //phone field
  formInputElements[4].onblur = function() {
    if(formInputElements[4].value == ''){
      errorCheckDisplay();
    };
  };

    //adress field
  formInputElements[5].onblur = function() {
    if(formInputElements[5].value == ''){
      errorCheckDisplay();
    };
  };

    //city field
  formInputElements[6].onblur = function() {
    if(formInputElements[6].value == ''){
      errorCheckDisplay();
    };
  };

    //postal code field
  formInputElements[7].onblur = function() {
    if(formInputElements[7].value == ''){
      errorCheckDisplay();
    };
  };

    //email field
  formInputElements[8].onblur = function() {
    if(formInputElements[8].value == ''){
      errorCheckDisplay();
    };
  };

    //password field
  formInputElements[9].onblur = function() {
    if(formInputElements[9].value == ''){
      errorCheckDisplay();
    };
  };

    //password repeat field
  formInputElements[10].onblur = function() {
    if(formInputElements[10].value == ''){
      errorCheckDisplay();
    };
  };

  //onFocus methods//
  function errorCheckRemove(){
    for(i = 0; i < (formLabelElements.length -3); i++){
      formLabelElements[i].classList.remove('warningAsterisk');
    };
    errorWarning[0].style.display = 'none';
  };

    //name field
  formInputElements[0].onfocus = function() {
    errorCheckRemove();
  };

    //last name field
  formInputElements[1].onfocus = function() {
    errorCheckRemove();
  };

    //dni field
  formInputElements[2].onfocus = function() {
    errorCheckRemove();
  };

    //date of birth field
  formInputElements[3].onfocus = function() {
    errorCheckRemove();
  };
    //phone field
  formInputElements[4].onfocus = function() {
    errorCheckRemove();
  };

    //adress field
  formInputElements[5].onfocus = function() {
    errorCheckRemove();
  };

    //city field
  formInputElements[6].onfocus = function() {
    errorCheckRemove();
  };

    //postal code field
  formInputElements[7].onfocus = function() {
    errorCheckRemove();
  };

    //email field
  formInputElements[8].onfocus = function() {
    errorCheckRemove();
  };

    //password field
  formInputElements[9].onfocus = function() {
    errorCheckRemove();
  };

    //password repeat field
  formInputElements[10].onfocus = function() {
    errorCheckRemove();
  };

  //inputs validation//
  function errorLabelAdd(errorString, labelIndex) {
    formInputElements[0].classList.add('warningAsterisk');
    var errorLabel = document.createElement('p');
    errorLabel.className = 'sign-up-form-field-error added';
    errorLabel.appendChild(document.createTextNode(errorString));
    formFieldElements[labelIndex].appendChild(errorLabel);
  };

  function errorLabelRemove(){
    checkCounter = 0;
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
      checkCounter++;
    };

    //last name field
    if(formInputElements[1].value.length < 3 || formInputElements[1].value.length > 12) {
      errorLabelAdd('Must contain at least 3 and less than 12 characters', 1);
      checkCounter++;
    };

    //dni field
    if(formInputElements[2].value.length <= 7 || formInputElements[2].value.length > 10) {
      errorLabelAdd('Must contain at least 3 and less than 10 characters', 2);
      checkCounter++;
    };

    //date of birth field
    var birth = formInputElements[3].value;
    if(birth.length < 10 || birth.length > 10) {
      errorLabelAdd('Invalid date format', 3);
      checkCounter++;
    };

    if(stringRunner(birth)[0] > 0 || stringRunner(birth)[2] > 2) {
      errorLabelAdd('Only numbers allowed', 3);
      checkCounter++;
    };

    if(parseInt(birth[0]) < 4 && parseInt(birth[1]) > 0) { //day
      if(parseInt(birth[3]) < 2 && parseInt(birth[4]) > 0 || parseInt(birth[3]) == 1 && parseInt(birth[4]) == 0) { //month
        if(parseInt(birth[3]) > 0) { //Oct, Nov, Dic
          if(parseInt(birth[4]) > 2) {
            errorLabelAdd('Invalid month', 3);
            checkCounter++;
          }else {
            if(parseInt(birth[4]) == 0) {
              if(parseInt(birth[0]) == 3 && parseInt(birth[1]) > 0) {
                console.log('hi');
                errorLabelAdd('Invalid day', 3);
                checkCounter++;
              };
            }else {
              if(parseInt(birth[0]) == 3 && parseInt(birth[1]) > 1) {
                errorLabelAdd('Invalid day', 3);
                checkCounter++;
              };
            };
          };
        }else { //Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep
          if(birth[4].search(/[1, 3, 5, 7, 8]/) != -1) { //31 days
            if(parseInt(birth[0]) == 3 && parseInt(birth[1]) > 1) {
              errorLabelAdd('Invalid day', 3);
              checkCounter++;
            };
          }else if(birth[4].search(/[4, 6, 9]/) != -1) { //30 days
            if(parseInt(birth[0]) == 3 && parseInt(birth[1]) > 0) {
              errorLabelAdd('Invalid day', 3);
              checkCounter++;
            };
          }else { //less than 30 days
            if(parseInt(birth[0]) > 2) {
              errorLabelAdd('Invalid day', 3);
              checkCounter++;
            };
          };
        };
      }else{
        errorLabelAdd('Invalid month', 3);
        checkCounter++;
      };
    }else{
      console.log('hi')
      errorLabelAdd('Invalid day', 3);
      checkCounter++;
    };

    //phone field
    var phone = formInputElements[4].value;
    if(stringRunner(phone)[0] > 0 || stringRunner(phone)[2] > 0) {
      errorLabelAdd('Only numbers allowed', 4);
      checkCounter++;
    };

    //adress field
    var adress = formInputElements[5].value;
    var position = adress.search(" ");

    if(stringRunner(adress)[0] + stringRunner(adress)[1] < 5) {
      errorLabelAdd('Must contain at least 5 characters', 5);
      checkCounter++;
    };

    if(stringRunner(adress)[0] < 3 || stringRunner(adress)[1] < 2) {
      errorLabelAdd('Street name must contain at least 3 characters and number at least 2 characters', 5);
      checkCounter++;
    };

    if(stringRunner(adress)[2] < 1) {
      if(stringRunner(adress)[3] < 1 || stringRunner(adress)[3] > 1) {
        errorLabelAdd('Must contain 1 space', 5);
        checkCounter++;
      };
    };

    if(stringRunner(adress)[2] > 1) {
      if(stringRunner(adress[position - 1])[0] == 0 && stringRunner(adress[position + 1])[1] == 0){
        errorLabelAdd('Spaces must be between the street name and the number', 5);
        checkCounter++;
      };
    };
    
    //city field
    var city = formInputElements[6].value;

    if(city.length < 3) {
      errorLabelAdd('Must contain at least 3 characters', 6);
      checkCounter++;
    };

    if(stringRunner(city)[2] > 1 && stringRunner(city)[3] == 0) {
      errorLabelAdd('Only spaces allowed', 6);
      checkCounter++;
    };

    //postal code field
    var postalCode = formInputElements[7].value;

    if(stringRunner(postalCode)[0] > 0 || stringRunner(postalCode)[2] > 0) {
      errorLabelAdd('Only numbers allowed', 7);
      checkCounter++;
    };

    if(stringRunner(postalCode)[1] < 4 || stringRunner(postalCode)[1] > 5) {
      errorLabelAdd('Must contain 4 or 5 digits', 7);
      checkCounter++;
    };

    //email field
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var email = formInputElements[8].value;

    if(emailExpression.test(email) != true) {
      errorLabelAdd('Must contain a valid format', 8);
      checkCounter++;
    };

    //password field
    var pass = formInputElements[9].value;

    if(pass.length < 8 || pass.length > 12) {
      errorLabelAdd('Must contain between 8 and 12 characters', 10);
      checkCounter++;
    };

    if(stringRunner(pass)[2] < 1){
      errorLabelAdd('Must contain at least 1 special character', 10);
      checkCounter++;
    }

    //password repeat field
    var passRep = formInputElements[10].value;

    if(passRep != pass){
      errorLabelAdd('Passwords did not match', 11);
      checkCounter++;
    }
  };

  //events//
  function errorCheckValidation(e){
    inputValidationCheck(e);
    e.preventDefault();
    if(checkCounter > 0) {
      alert('Can not Sign-Up!\ncheck your information');
    }else {
      alert('Sign-Up success!\n' +
        'Name: ' + formInputElements[0].value +
        '\nLast Name: ' + formInputElements[1].value +
        '\nID: ' + formInputElements[2].value +
        '\nDate of Birth: ' + formInputElements[3].value +
        '\nPhone: ' + formInputElements[4].value +
        '\nAdress: ' + formInputElements[5].value +
        '\nCity: ' + formInputElements[6].value +
        '\nPostal Code: ' + formInputElements[7].value +
        '\nEmail: ' + formInputElements[8].value +
        '\nPassword: ' + formInputElements[9].value +
        '\nPassword Repeat: ' + formInputElements[10].value);
    };
  }

  form.addEventListener('submit', errorLabelRemove);
  form.addEventListener('submit', errorCheckValidation);
};