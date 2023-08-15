// Deposit Section
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountSting = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountSting)


    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalSting = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat( previousDepositTotalSting)

    const currentDepositAmount = previousDepositTotal + newDepositAmount

    depositTotalElement.innerText = currentDepositAmount


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalAmount = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalAmount);

    const currentBalance = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentBalance;




    depositField.value = '';

})

// Withdraw Section
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawAmountSting = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountSting);

    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previousWithdrawTotalElement = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalElement);

    
    const currentWithdrawAmount = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawAmount;


    const withdrawElement = document.getElementById('balance-total');
    const previousWithdrawTotalAmount = withdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawTotalAmount);

    const newBalance = previousWithdrawAmount - newWithdrawAmount;
    withdrawElement.innerText =  newBalance;

    withdrawField.value = '';

 
})