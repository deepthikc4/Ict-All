var xt=document.getElementById('head1');
xt.style.color='blue';
xt.style.fontFamily='Arial';
xt.innerText='i have been changed';
xt.innerHTML=`<h4> i am h4 tag </h4>`;
var tt=document.getElementById('emptydiv');
tt.innerHTML=`<p> i am empty div para</p>`;
// using class name

var  list= document.getElementsByClassName('list1');
console.log(list);
list[0].style.color="red";
list[1].style.backgroundColor="yellow";
list[2].innerText='i have been manipulated';

// using tag name
var tags=document.getElementsByTagName('h1');
console.log(tags);
tags[0].innerText='Dom Manipulated';

// query selector

// var que= document.querySelector('.list1');
// console.log(que);
// que.style.backgroundColor='aqua';

// var que= document.querySelector('.list1:last-child');
//  console.log(que);
//  que.style.backgroundColor='aqua';

var que= document.querySelector('.list1:nth-child(2)');
console.log(que);
que.style.backgroundColor='aqua';

// EVENTS

// click event=access button
// var btn=document.getElementById('button1');...currently no manipulation
function popup1()
{
    alert("i am clicked");
}
// mouse over
// when mouseover color will change
var pp = document.getElementById('para1');

function colchange()
    {
pp.style.color="green";
    }

// onmouseout event
var hh=document.getElementById('head1');
function colchangehead()
{
hh.style.color='orange';
}


