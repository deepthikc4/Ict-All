var email=document.getElementById('email');
var pwd=document.getElementById('password');
var errpw=document.getElementById("errpwd");
var erremail=document.getElementById("err2")
function validate()
{
    console.log(email.value);

if(email.value.trim()==""|| pwd.value.trim()=="" )
{
    alert("field is empty")
    // erremail.innerText="email required";
    return false
}
else if(pwd.value.length<5)
{
    //  alert("too short")
     pwd.style.border="1px solid red";
    errpw.innerText="password is too short";
    return false
}
else
{
    alert("success")
    return true;
}
}