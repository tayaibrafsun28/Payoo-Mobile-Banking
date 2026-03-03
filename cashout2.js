document.getElementById('withdraw-btn').addEventListener('click', function(){

    // Fetching the agent number

    const agentNumber = getValueFromInput('agent-number');

    if(agentNumber.length != 11){
        alert('Invalid Agent Number');
        return;
    }

   // Fetching cashout amount

    const cashoutAmount = getValueFromInput('cashout-amount');

    // Fetching account balance

    const balanceInput = document.getElementById('balance');

    const balance = balanceInput.innerText;

    const newBalance = Number (balance) - Number (cashoutAmount);

    if(newBalance < 0){
        alert('Invalid Amount')
        return;
    }

    // Fetching Cashout Pin

    const cashoutPin = getValueFromInput('cashout-pin')

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

});