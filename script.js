
// Toggle Manu bar //

let manulist = document.getElementById("manulist")
.style.height="0px";

function togglemanu(){
    document.getElementById("manulist").style.height="300px";
}
function closeNav(){
    document.getElementById("manulist").style.height="0px";

      document.getElementByclass("demo").style.height="0px";
}

// End Toggle Manu bar //

// contact pop up message //

function myfunction(){
    var txt;
    if (confirm("You Are Submit In Contact")){
        txt = "you pressed ok";
    }
    else{
        txt = "you pressed cancel";
    }
    document.getElementById("popup").innerHTML=txt;
}

// End contact pop up message //