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
    
    
    var data=JSON.parse(this.responseText);
   
    var output="";
    for(let i=0;i<data.length;i++)
    {
        output+='<li>'+data[i].email+'</li>'
    }
    para.innerHTML=output;
   
        }
        }
    // initiate the request

    xhttp.open('GET', 'https://gorest.co.in/public/v2/users', true);
    // send the request
    xhttp.send();

}