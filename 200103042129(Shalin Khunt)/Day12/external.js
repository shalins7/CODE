function externalAlert()
{
     alert("external");
}

function externalConfirm()
{
     if(confirm("are you sure??"))
    {
        alert("yess");
    }
    else
    {
     
        alert("noo");
     }
}


function externalPrompt()
{
    var name=prompt("enter internal prompt value")
    alert ("hello"+name);
}
