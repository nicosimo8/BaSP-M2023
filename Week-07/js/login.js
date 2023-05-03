window.onload = function(){
  var emailInput = document.querySelector('input[name="email"]');
  var passwordInput = document.querySelector('input[name="password"]');
  var emailLabel = document.querySelector('label[for="email"]');
  var passwordLabel = document.querySelector('label[for="password"]');
  var errorWarning = document.getElementsByClassName('login-form-error');
  var form = document.getElementById('login-form');

  emailInput.onblur = function(){
    if(emailInput.value == ''){
      emailLabel.classList.add('warningAsterisk');
      passwordLabel.classList.add('warningAsterisk');
      errorWarning[0].innerText = '* fields are requiered'
      errorWarning[0].style.display = 'block';
    };
  };

  passwordInput.onblur = function(){
    if(passwordInput.value == ''){
      emailLabel.classList.add('warningAsterisk');
      passwordLabel.classList.add('warningAsterisk');
      errorWarning[0].innerText = '* fields are requiered'
      errorWarning[0].style.display = 'block';
    };
  };

  emailInput.onfocus = function(){
    emailLabel.classList.remove('warningAsterisk');
    passwordLabel.classList.remove('warningAsterisk');
    errorWarning[0].style.display = 'none';
  };

  passwordInput.onfocus = function(){
    emailLabel.classList.remove('warningAsterisk');
    passwordLabel.classList.remove('warningAsterisk');
    errorWarning[0].style.display = 'none';
  };

  function localSave(email, password){
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  };

  function localComplete(){
    if(localStorage.getItem('email') != ''){
      emailInput.value = localStorage.getItem('email');
    };
    
    if(localStorage.getItem('password') != ''){
      passwordInput.value = localStorage.getItem('password');
    };
  };

  function emailValidationError(){
      emailLabel.classList.add('warningAsterisk');
      errorWarning[0].innerText = '* enter a valid email'
      errorWarning[0].style.display = 'block';
  };

  function passwordValidation(){
    var pass = passwordInput.value;
    
    if(pass.length < 8) {
      return false;
    }else{
      return true;
    };
  };

  function emailValidationCheck(e){
    e.preventDefault();

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailValue = emailInput.value;
    var passValue = passwordInput.value;
    if(emailExpression.test(emailValue) != true || passwordValidation() != true){
      emailValidationError();
      alert('Can not Log-In!\ncheck your information');
    }else{
      fetch('https://api-rest-server.vercel.app/login' + 
      '?email=' + emailValue +
      '&password=' + passValue
      )
      .then(function(response){
        alert('Log-In success!\n' + 'email: ' + emailValue + '\nValid password');
        localSave(emailValue, passValue);
        return response.json();
      }).catch(function(error){
        alert('Error!\n' + error);
      });
    };
  };

  localComplete();
  form.addEventListener('submit', emailValidationCheck);
};