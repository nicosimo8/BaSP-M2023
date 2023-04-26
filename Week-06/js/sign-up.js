window.onload = function() {
  var errorWarning = document.getElementsByClassName('sign-up-form-error');
  var form = document.getElementById('sign-up-form');
  var formFieldElements = document.querySelectorAll('form fieldSet');
  var formLabelElements = document.querySelectorAll('form label');
  var formInputElements = document.querySelectorAll('form input');

  var errorCheck = true;
  var checkCounter = 0;

  function errorCheckDisplay(){
    for(i = 0; i < (formLabelElements.length -3); i++){
      formLabelElements[i].classList.add('warningAsterisk');
    };
    errorWarning[0].innerText = '* fields are requiered';
    errorWarning[0].style.display = 'block';
  };

  formInputElements[0].onblur = function(){
    if(formInputElements[0].value == ''){
      errorCheckDisplay();
    };
  };

  formInputElements[1].onblur = function(){
    if(formInputElements[1].value == ''){
      errorCheckDisplay();
    };
  };

  formInputElements[2].onblur = function(){
    if(formInputElements[2].value == ''){
      errorCheckDisplay();
    };
  };

  formInputElements[3].onblur = function(){
    if(formInputElements[3].value == ''){
      errorCheckDisplay();
    };
  };

  formInputElements[4].onblur = function(){
    if(formInputElements[4].value == ''){
      errorCheckDisplay();
    };
  };

  formInputElements[5].onblur = function(){
    if(formInputElements[5].value == ''){
      errorCheckDisplay();
    };
  };

  formInputElements[6].onblur = function(){
    if(formInputElements[6].value == ''){
      errorCheckDisplay();
    };
  };

  formInputElements[7].onblur = function(){
    if(formInputElements[7].value == ''){
      errorCheckDisplay();
    };
  };

  formInputElements[8].onblur = function(){
    if(formInputElements[8].value == ''){
      errorCheckDisplay();
    };
  };

  formInputElements[9].onblur = function(){
    if(formInputElements[9].value == ''){
      errorCheckDisplay();
    };
  };

  formInputElements[10].onblur = function(){
    if(formInputElements[10].value == ''){
      errorCheckDisplay();
    };
  };

  function errorCheckRemove(){
    for(i = 0; i < (formLabelElements.length -3); i++){
      formLabelElements[i].classList.remove('warningAsterisk');
    };
    errorWarning[0].style.display = 'none';
  };

  formInputElements[0].onfocus = function(){
    errorCheckRemove();
  };

  formInputElements[1].onfocus = function(){
    errorCheckRemove();
  };

  formInputElements[2].onfocus = function(){
    errorCheckRemove();
  };

  formInputElements[3].onfocus = function(){
    errorCheckRemove();
  };

  formInputElements[4].onfocus = function(){
    errorCheckRemove();
  };

  formInputElements[5].onfocus = function(){
    errorCheckRemove();
  };

  formInputElements[6].onfocus = function(){
    errorCheckRemove();
  };

  formInputElements[7].onfocus = function(){
    errorCheckRemove();
  };

  formInputElements[8].onfocus = function(){
    errorCheckRemove();
  };

  formInputElements[9].onfocus = function(){
    errorCheckRemove();
  };

  formInputElements[10].onfocus = function(){
    errorCheckRemove();
  };

  function errorLabelAdd(errorString, labelIndex){
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
        while(element.children.length > 2){
          element.removeChild(element.children[2]);
        }
      };
    };
  }

  function stringRunner(string){
    var strMatch = 0;
    var numMatch = 0;
    var speMatch = 0;
    var spaces = 0;

    for(i = 0; i < string.length; i++){
      if(string.charCodeAt(i) > 47 && string.charCodeAt(i) < 58){
        numMatch++;
      }else if(string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123 || string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91){
        strMatch++;
      }else{
        speMatch++;
        if(string.charCodeAt(i) == 32){
          spaces++;
        };
      };
    };

    var coincidences = [strMatch, numMatch, speMatch, spaces];

    return coincidences;
  };

  function inputValidationCheck(e) {
    e.preventDefault();
  
    var name = formInputElements[0].value;
    var lastName = formInputElements[1].value;
    var dni = formInputElements[2].value;
    var birth = formInputElements[3].value;
    birth = birth.substring(8, 10) + birth.substring(4, 8) + birth.substring(0, 4);
    var phone = formInputElements[4].value;
    var adress = formInputElements[5].value;
    var adrSpacPos = adress.search(" ");
    var city = formInputElements[6].value;
    var postalCode = formInputElements[7].value;
    var email = formInputElements[8].value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var pass = formInputElements[9].value;
    var passRep = formInputElements[10].value;

    if(name.length < 3){
      errorLabelAdd('Must contain at least 3 characters', 0);
      checkCounter++;
    }else if(stringRunner(name)[1] > 0){
      errorLabelAdd('Can not contains numbers', 0);
      checkCounter++;
    }else if(stringRunner(name)[2] > 0 && stringRunner(name)[3] == 0){
      errorLabelAdd('Only spaces allowed', 0);
      checkCounter++;
    }else if(stringRunner(name)[3] > 0 && name.search(' ') < 4 || stringRunner(name)[3] > 1){
      errorLabelAdd('Only one space allowed and must be between names', 0);
      checkCounter++;
    };

    if(lastName.length < 3 || lastName.length > 12){
      errorLabelAdd('Must contain at least 3 and less than 12 characters', 1);
      checkCounter++;
    }else if(stringRunner(LastName)[1] > 0){
      errorLabelAdd('Can not contains numbers', 1);
      checkCounter++;
    }else if(stringRunner(LastName)[2] > 0 && stringRunner(LastName)[3] == 0){
      errorLabelAdd('Only spaces allowed', 1);
      checkCounter++;
    }else if(stringRunner(LastName)[3] > 0 && LastName.search(' ') < 4 || stringRunner(LastName)[3] > 1){
      errorLabelAdd('Only one space allowed and must be between names', 1);
      checkCounter++;
    };

    if(dni.length < 7 || dni.length > 10){
      errorLabelAdd('Must contain at least 7 and less than 10 characters', 2);
      checkCounter++;
    }else if(stringRunner(dni)[0] > 0){
      errorLabelAdd('Only numbers allowed', 2);
      checkCounter++;
    };

    if(birth.length < 10 || birth.length > 10){
      errorLabelAdd('Invalid date format', 3);
      checkCounter++;
    }else if(stringRunner(birth)[0] > 0 || stringRunner(birth)[2] > 2){
      errorLabelAdd('Only numbers allowed', 3);
      checkCounter++;
    }else if(parseInt(birth[0]) < 4){
      if(parseInt(birth[3]) < 2 && parseInt(birth[4]) > 0 || parseInt(birth[3]) == 1 && parseInt(birth[4]) == 0){
        if(parseInt(birth[3]) > 0){
          if(parseInt(birth[4]) > 2){
            errorLabelAdd('Invalid month', 3);
            checkCounter++;
          }else{
            if(parseInt(birth[4]) == 0) {
              if(parseInt(birth[0]) == 3 && parseInt(birth[1]) > 0){
                console.log('hi');
                errorLabelAdd('Invalid day', 3);
                checkCounter++;
              };
            }else{
              if(parseInt(birth[0]) == 3 && parseInt(birth[1]) > 1){
                errorLabelAdd('Invalid day', 3);
                checkCounter++;
              };
            };
          };
        }else{
          var months31 = [1, 3, 5, 7, 8];
          var months30 = [4, 6, 9];

          function miniMonth(monthArray){
            for(i = 0; i < monthArray.length; i++){
              if(parseInt(birth[4]) == monthArray[i]){
                return true;
              }else{
                return false;
              };
            };
          }

          if(miniMonth(months31)){
            if(parseInt(birth[0]) == 3 && parseInt(birth[1]) > 1){
              errorLabelAdd('Invalid day', 3);
              checkCounter++;
            };
          }else if(miniMonth(months30)){
            if(parseInt(birth[0]) == 3 && parseInt(birth[1]) > 0){
              errorLabelAdd('Invalid day', 3);
              checkCounter++;
            };
          }else {
            if(parseInt(birth[0]) > 2){
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
      errorLabelAdd('Invalid day', 3);
      checkCounter++;
    };

    if(stringRunner(phone)[0] > 0 || stringRunner(phone)[2] > 0){
      errorLabelAdd('Only numbers allowed', 4);
      checkCounter++;
    }else if(phone.length != 10){
      errorLabelAdd('Incorrect phone length', 4);
      checkCounter++;
    };
    
    if(stringRunner(adress)[0] + stringRunner(adress)[1] < 5){
      errorLabelAdd('Must contain at least 5 characters', 5);
      checkCounter++;
    }else if(stringRunner(adress)[0] < 3 || stringRunner(adress)[1] < 2){
      errorLabelAdd('Street name must contain at least 3 characters, number at least 2 characters', 5);
      checkCounter++;
    }else if(stringRunner(adress)[2] < 1){
      if(stringRunner(adress)[3] < 1 || stringRunner(adress)[3] > 1){
        errorLabelAdd('Must contain 1 space', 5);
        checkCounter++;
      };
    }else if(stringRunner(adress)[2] > 1){
      if(stringRunner(adress[adrSpacPos - 1])[0] == 0 && stringRunner(adress[adrSpacPos + 1])[1] == 0){
        errorLabelAdd('Spaces must be between the street name and the number', 5);
        checkCounter++;
      };
    };
    
    if(city.length < 3){
      errorLabelAdd('Must contain at least 3 characters', 6);
      checkCounter++;
    }else if(stringRunner(city)[1] > 0){
      errorLabelAdd('Can not contains numers', 6);
      checkCounter++;
    }else if(stringRunner(city)[2] > 1 && stringRunner(city)[3] == 0){
      errorLabelAdd('Only spaces allowed', 6);
      checkCounter++;
    };

    if(stringRunner(postalCode)[0] > 0 || stringRunner(postalCode)[2] > 0){
      errorLabelAdd('Only numbers allowed', 7);
      checkCounter++;
    }else if(stringRunner(postalCode)[1] < 4 || stringRunner(postalCode)[1] > 5){
      errorLabelAdd('Must contain 4 or 5 digits', 7);
      checkCounter++;
    };

    if(emailExpression.test(email) != true){
      errorLabelAdd('Must contain a valid format', 8);
      checkCounter++;
    };

    if(pass.length < 8 || pass.length > 12){
      errorLabelAdd('Must contain between 8 and 12 characters', 10);
      checkCounter++;
    }else if(stringRunner(pass)[2] < 1){
      errorLabelAdd('Must contain at least 1 special character', 10);
      checkCounter++;
    }

    if(passRep != pass){
      errorLabelAdd('Passwords did not match', 11);
      checkCounter++;
    }
  };

  function errorCheckValidation(e){
    inputValidationCheck(e);
    e.preventDefault();
    if(checkCounter > 0){
      alert('Can not Sign-Up!\ncheck your information');
    }else{
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