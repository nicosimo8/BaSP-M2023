window.onload = function() {
  var emailInput = document.querySelector('input[name="email"]');
  var passwordInput = document.querySelector('input[name="password"]');
  var emailLabel = document.querySelector('label[for="email"]');
  var passwordLabel = document.querySelector('label[for="password"]');
  var errorWarning = document.getElementsByClassName('login-form-error');
  var form = document.getElementById('login-form');

  emailInput.onblur = function() {
    if(emailInput.value == ''){
      emailLabel.classList.add('warningAsterisk');
      passwordLabel.classList.add('warningAsterisk');
      errorWarning[0].innerText = '* fields are requiered'
      errorWarning[0].style.display = 'block';
    }
  }

  passwordInput.onblur = function() {
    if(passwordInput.value == ''){
      emailLabel.classList.add('warningAsterisk');
      passwordLabel.classList.add('warningAsterisk');
      errorWarning[0].innerText = '* fields are requiered'
      errorWarning[0].style.display = 'block';
    }
  }

  emailInput.onfocus = function() {
    emailLabel.classList.remove('warningAsterisk');
    passwordLabel.classList.remove('warningAsterisk');
    errorWarning[0].style.display = 'none';
  }

  passwordInput.onfocus = function() {
    emailLabel.classList.remove('warningAsterisk');
    passwordLabel.classList.remove('warningAsterisk');
    errorWarning[0].style.display = 'none';
  }

  function emailValidationError() {
      emailLabel.classList.add('warningAsterisk');
      errorWarning[0].innerText = '* enter a valid email'
      errorWarning[0].style.display = 'block';
  }

  function passwordValidation(){
    var pass = passwordInput.value;
    
    if(pass.length < 8) {
      return false;
    }else{
      return true;
    };
  }

  function emailValidationCheck(e){
    e.preventDefault();
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailValue = emailInput.value;
    if(emailExpression.test(emailValue) != true || passwordValidation() != true){
      emailValidationError();
      alert('Can not Log-In!\ncheck your information');
    }else{
      alert('Log-In success!\n' + 'email: ' + emailInput.value + '\npassword: ' + passwordInput.value);
    }
  }

  form.addEventListener('submit', emailValidationCheck);
}