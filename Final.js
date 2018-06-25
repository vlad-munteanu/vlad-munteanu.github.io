
function myFunction()
{
    var hexDigits = "0123456789abcdef";
    var macAddress = "d4:";
    for (var i = 2; i < 6; i++) 
    {
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        if (i != 5) macAddress += ":";
    }

    document.getElementById("respond").innerHTML = macAddress;
}

function reload() 
{
    location.reload();
}
