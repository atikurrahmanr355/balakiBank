var loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', displayShow);

// var transaction = document.getElementById("transaction_area");
// transaction.style.display="none";
// var bank_home = document.getElementById("bank-home");
// bank_home.style.display = "none";


function displayShow(){
    var bank_home = document.getElementById("bank-home");
    bank_home.style.display = "none";
    var transaction = document.getElementById("my-bank");
    transaction.style.display="block";
}