
var res=document.getElementById('result');
function display()
{
   try {
    // alart("I a an alert");
    var y=10/0;
    if(y==Infinity) throw 'the result is not a number'
    // console.log(y);
   } catch (error) {
    res.innerText=error;
   }
   finally{
    var y=0;
    console.log(y);
   }}
// //    Json
// var person={
//     age:29,
//     job: "painting"
// }
// var person2={
//     "age":29,
//     "job": "painting"
// }
// // var p=JSON.parse(person2)
// var p=JSON.stringify(person2);
// console.log(p);
// var p1=JSON.parse(person2);

// Ajax==============
// crate DOm element
var para=document.getElementById('ajres');  

function ajaxcall()
{
    // create XHR Request
    var xhttp=new XMLHttpRequest();
    // Wait fr the response
    xhttp.onreadystatechange=function()
    {
        if(this.readyState==4 &&this.status==200)
        {
    //    para.innerHTML=this.responseText;--for etext file
    
    var data=JSON.parse(this.responseText);
    // var data=this.responseText;===text file
    var output="";
    for(let i=0;i<data.length;i++)
    {
        output+='<li>'+data[i].name+'</li>'
    }
    para.innerHTML=output;
    // para.innerHTML=this.responseText;===text file
        }
        }
    // initiate the request

    xhttp.open('GET', 'data.json', true);
    // send the request
    xhttp.send();

}

// practce question


