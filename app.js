const pass = document.querySelector('.pass');
const conp = document.querySelector('.pass');
const msg = document.querySelector('#msg');

function checkForm() {
   const password =  document.getElementById('password').value;
   const confirmPassword =  document.getElementById('confirmPassword').value;

   if(password != confirmPassword) {
        msg.textContent = '';
        msg.textContent += 'Passwords Must Match!';
        pass.style = 'border: 1px solid red;';
        conp.style = 'border: 1px solid red;'
   }
}