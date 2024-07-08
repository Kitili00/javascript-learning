const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const pesapalBtn = document.getElementById("pesapalBtn");
const venmoBtn = document.getElementById("venmoBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = "You are paying using Card!";
    }
    else{
        subResult.textContent = "You are not paying using Card";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You are paying using Visa";
    }
    else if(pesapalBtn.checked){
        paymentResult.textContent = "You are paying using Pesapal";
    }
    else if(venmoBtn.checked){
        paymentResult.textContent = "You are paying using Venmo";
    }
}
