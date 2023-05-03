window.onload = function(){
  var errorWarning = document.getElementsByClassName('sign-up-form-error');
  var form = document.getElementById('sign-up-form');
  var formFieldElements = document.querySelectorAll('form fieldSet');
  var formLabelElements = document.querySelectorAll('form label');
  var formInputElements = document.querySelectorAll('form input');

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
    errorLabelRemove();
  };

  formInputElements[1].onfocus = function(){
    errorCheckRemove();
    errorLabelRemove();
  };

  formInputElements[2].onfocus = function(){
    errorCheckRemove();
    errorLabelRemove();
  };

  formInputElements[3].onfocus = function(){
    errorCheckRemove();
    errorLabelRemove();
  };

  formInputElements[4].onfocus = function(){
    errorCheckRemove();
    errorLabelRemove();
  };

  formInputElements[5].onfocus = function(){
    errorCheckRemove();
    errorLabelRemove();
  };

  formInputElements[6].onfocus = function(){
    errorCheckRemove();
    errorLabelRemove();
  };

  formInputElements[7].onfocus = function(){
    errorCheckRemove();
    errorLabelRemove();
  };

  formInputElements[8].onfocus = function(){
    errorCheckRemove();
    errorLabelRemove();
  };

  formInputElements[9].onfocus = function(){
    errorCheckRemove();
    errorLabelRemove();
  };

  formInputElements[10].onfocus = function(){
    errorCheckRemove();
    errorLabelRemove();
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

    for(i = 0; i < formParagElements.length; i++){
      if(formParagElements[i].classList.contains('added')){
        var element = formFieldElements[i]; //if element < fields then "i" did not match - need to be fixed
        formParagElements[i].style.display = 'none'; //for now, need to remove <P> element - need to be fixed
        while(element.children.length > 2){
          element.removeChild(element.children[2]);
        };
      };
    };
  };

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

  function inputValidationCheck() {
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
    }else if(stringRunner(lastName)[1] > 0){
      errorLabelAdd('Can not contains numbers', 1);
      checkCounter++;
    }else if(stringRunner(lastName)[2] > 0 && stringRunner(lastName)[3] == 0){
      errorLabelAdd('Only spaces allowed', 1);
      checkCounter++;
    }else if(stringRunner(lastName)[3] > 0 && lastName.search(' ') < 4 || stringRunner(lastName)[3] > 1){
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
          }else{
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
    }else if(stringRunner(pass)[1] < 1){
      errorLabelAdd('Must contain at least 1 number', 10);
      checkCounter++;
    }else if(stringRunner(pass)[0] < 1){
      errorLabelAdd('Must contain at least 1 letter', 10);
      checkCounter++;
    };

    if(passRep != pass){
      errorLabelAdd('Passwords did not match', 11);
      checkCounter++;
    };
  };

  function localSave(name, lastName, dni, dob, phone, address, city, zip, email, password){
    localStorage.setItem('name', name);
    localStorage.setItem('lastname', lastName);
    localStorage.setItem('dni', dni);
    localStorage.setItem('dateofbirth', dob);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address);
    localStorage.setItem('city', city);
    localStorage.setItem('zip', zip);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  };

  function localComplete(){
    if(localStorage.getItem('name') != ''){
      formInputElements[0].value = localStorage.getItem('name');
    };

    if(localStorage.getItem('lastname') != ''){
      formInputElements[1].value = localStorage.getItem('lastname');
    };

    if(localStorage.getItem('dni') != ''){
      formInputElements[2].value = localStorage.getItem('dni');
    };
    
    if(localStorage.getItem('dateofbirth') != ''){
      formInputElements[3].value = localStorage.getItem('dateofbirth');
    };
    
    if(localStorage.getItem('phone') != ''){
      formInputElements[4].value = localStorage.getItem('phone');
    };
    
    if(localStorage.getItem('address') != ''){
      formInputElements[5].value = localStorage.getItem('address');
    };
    
    if(localStorage.getItem('city') != ''){
      formInputElements[6].value = localStorage.getItem('city');
    };
    
    if(localStorage.getItem('zip') != ''){
      formInputElements[7].value = localStorage.getItem('zip');
    };
    
    if(localStorage.getItem('email') != ''){
      formInputElements[8].value = localStorage.getItem('email');
    };
    
    if(localStorage.getItem('password') != ''){
      formInputElements[9].value = localStorage.getItem('password');
    };
  };

  function submitForm(name, lastName, dni, dob, phone, address, city, zip, email, password){
    dob = dob.substring(5, 7) + '/' + dob.substring(8, 10) + '/' + dob.substring(0, 4);

    fetch('https://api-rest-server.vercel.app/signup' + 
      '?name=' + name +
      '&lastName=' + lastName +
      '&dni=' + dni +
      '&dob=' + dob +
      '&phone=' + phone +
      '&address=' + address +
      '&city=' + city +
      '&zip=' + zip +
      '&email=' + email +
      '&password=' + password)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        
        localSave(data.data.name,
          data.data.lastName,
          data.data.dni,
          formInputElements[3].value,
          data.data.phone,
          data.data.address,
          data.data.city,
          data.data.zip,
          data.data.email,
          data.data.password
        );

        alert(data.msg + '\n' +
          data.data.name + '\n' +
          data.data.lastName + '\n' +
          data.data.dni + '\n' +
          data.data.dob + '\n' +
          data.data.phone + '\n' +
          data.data.address + '\n' +
          data.data.city + '\n' +
          data.data.zip + '\n' +
          data.data.email + '\n' +
          data.data.password + '\n'
        );

      })
      .catch(function(error){
        alert('Error: Can not reach the server\n' + error);
        console.log('error', error);
    });
  };

  function errorCheckValidation(e){
    e.preventDefault();
    inputValidationCheck();
    
    if(checkCounter > 0){
      alert('Can not Sign-Up!\ncheck your information');
    }else{
      submitForm(formInputElements[0].value,
        formInputElements[1].value,
        formInputElements[2].value,
        formInputElements[3].value,
        formInputElements[4].value,
        formInputElements[5].value,
        formInputElements[6].value,
        formInputElements[7].value,
        formInputElements[8].value,
        formInputElements[9].value
      );
    };
  };

  localComplete();
  form.addEventListener('submit', errorLabelRemove);
  form.addEventListener('submit', errorCheckValidation);
};