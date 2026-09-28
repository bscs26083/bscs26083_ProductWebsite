function welcome()
{
    alert("Welcome to LiviesHQ! Enjoy your shopping experience.");
}

window.onload = welcome();


document.getElementById("footer").textContent = new Date().getFullYear();


function Available() {document.getElementById("availabilityp1").innerHTML = "Availability: In Stock";}
function Available2() {document.getElementById("availabilityp2").innerHTML = "Availability: In Stock";}
function Available3() {document.getElementById("availabilityp3").innerHTML = "Availability: In Stock";}
function Available4() {document.getElementById("availabilityp4").innerHTML = "Availability: In Stock";}
function Available5() {document.getElementById("availabilityp5").innerHTML = "Availability: Out of Stock";}
