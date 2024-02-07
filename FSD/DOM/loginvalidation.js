var name2=document.getElementById('name');
var phone2=document.getElementById('phone');
var pwd2=document.getElementById('password');
var namemsg2=document.getElementById('namemsg');
var phonemsg2=document.getElementById('phonemsg');
var pwdmsg2=document.getElementById('pwdmsg');

// password strength

function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strengthText = document.getElementById("password-strength");

    // Reset the strength text
    strengthText.innerHTML = "";

    // Minimum length requirement
    // if (password.length < 8) {
    //   strengthText.innerHTML = "Password is too short";
    //   return;
    // }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
      strengthText.innerHTML += "Contains uppercase letters. ";
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
      strengthText.innerHTML += "Contains lowercase letters. ";
    }

    // Check for numbers
    if (/\d/.test(password)) {
      strengthText.innerHTML += "Contains numbers. ";
    }

    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      strengthText.innerHTML += "Contains special characters. ";
    }

    // Display password strength based on length and criteria
    if (password.length >= 12) {
      strengthText.innerHTML = "Strong password!";
      strengthText.style.color='green';
    } else if (password.length >= 8) {
      strengthText.innerHTML += "Medium password.";
      strengthText.style.color='orange';
    } else {
      strengthText.innerHTML += "Weak password.";
      strengthText.style.color='red';

    }
  }






function loginvalidate()
{
    console.log(name2.value);
    var regexp1=/^([a-z A-Z]+)$/;
    var regexp2= /^([0-9]+)$/;
    var regexp3=/^([a-z A-Z 0-9]+)$/;
    let isvalid=true;
// check name
if(!regexp1.test(name2.value))
{
    

    namemsg2.innerText='Please enter valid name';
    namemsg2.style.color='red';
    isvalid= false;
}
else{
    namemsg2.innerText='name is valid';
    namemsg2.style.color='green';
    //return true;
}


// check phone number
if(!(regexp2.test(phone2.value))||(phone2.value.length!=10))
{
    
    phonemsg2.innerText='Please enter valid phone number';
    phonemsg2.style.color='red';
    isvalid= false;
}
else{
    phonemsg2.innerText='phone number is valid';
    phonemsg2.style.color='green';
    
}

// check password

 if(!regexp3.test(pwd2.value))
{
   
    pwdmsg2.innerText='Please enter correct password';
    pwdmsg2.style.color='red';
  isvalid= false;
   
    
}
else
{
   
   
    pwdmsg2.innerText='password is correct';
    pwdmsg2.style.color='green';
    
}
return isvalid;
}