var loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', displayShow);

function displayShow(){
    var bank_home = document.getElementById("bank-home");
    bank_home.style.display = "none";
    var transaction = document.getElementById("my-bank");
    transaction.style.display="block";
}
//deposit buttons area

function spanTextUpdates(id,deposit){
    const current = document.getElementById(id).innerText;
    const currentAmount = parseFloat(current);
    const totalAmount = deposit + currentAmount;
    document.getElementById(id).innerText = totalAmount;
    
}

var addDeposit = document.getElementById('depositBtn');
addDeposit.addEventListener('click', function(){
    const deposit = document.getElementById('depositAmount').value;
    const depositAmount = parseFloat(deposit);
    if(depositAmount< 0){
        alert("Deposit number can not be negative!");
    }
    else{
        spanTextUpdates("currentDeposit",depositAmount);
        spanTextUpdates("currentBalance",depositAmount);
        document.getElementById("depositAmount").value = "";
    }

    
})


//withdrew buttons area
var withdrawDeposit = document.getElementById('withdrawBtn');
withdrawDeposit.addEventListener('click', function(){
    console.log("withdraw click");
    const withdrawAmount = document.getElementById("withdrawAmount").value
    const withdrawAmounts = parseFloat(withdrawAmount);

    spanTextUpdates('currentWithdraw',withdrawAmounts);
    spanTextUpdates('currentBalance', -1 * withdrawAmounts);

    document.getElementById("withdrawAmount").value = "";


})


