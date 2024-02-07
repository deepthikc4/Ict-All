// form

var email=document.getElementById('email');

var pwd=document.getElementById('password');

function change()
{
    email.style.backgroundColor="yellow";
}
function hide()
{
    email.style.backgroundColor="white";
}

pwd.addEventListener('keypress', function display(e)
{
    console.log(e.target.value);
})