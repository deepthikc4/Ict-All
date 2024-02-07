var email=document.getElementById('email');
var pwd=document.getElementById('password');
var erremail=document.getElementById("err2")
function validate()
{
    console.log(email.value);
var regexp = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/ 

if(regexp.test(email.value)) 
{
  
    erremail.innerText="email is valid";
    return true;
}
else{
    erremail.innerText="email is invalid";
    return false;
}
}
// function validate(){
//     var r = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-])\.([a-zA-z]{2,3})(\.[a-zA-Z]{2,3})?$ /
//     var regexp = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/
//     if(regexp.test(email.value)){
//         err2.innerText ="Email is Vaild";
//         return true

//     }
//     else{
//         err2.innerText="Email is invaild";
//         return false
//     }
// }