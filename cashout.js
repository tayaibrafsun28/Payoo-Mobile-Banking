document.getElementById('withdraw-btn').addEventListener('click', function(){

    // Fetching the agent number

   const agentNumberInput = document.getElementById('agent-number');

   const agentNumber = agentNumberInput.value;

   if (agentNumber.length != 11) {
    alert('Invalid Agent Number');
    return;
   }

   // Fetching cashout amount

   const cashoutAmountInput = document.getElementById('cashout-amount');

   const cashoutAmount = cashoutAmountInput.value;

    // Fetching account balance

    const balanceInput = document.getElementById('balance');

    const balance = balanceInput.innerText;

    // Calculate new balance 

    const newBalance = Number(balance) - Number(cashoutAmount);

    if (newBalance < 0) {
        alert('Invalid Amount');
        return;       
    }

    // Fetching Cashout Pin

    const cashoutPinInput = document.getElementById('cashout-pin');

    const cashoutPin = cashoutPinInput.value;

    // Check Pin Validation

    if (cashoutPin === '1234') {
        alert('Cashout Successfull');

        // Update account Balance

        balanceInput.innerText = newBalance;

    }

    else{
        alert('Invalid PIN');
        return; 
    }

})