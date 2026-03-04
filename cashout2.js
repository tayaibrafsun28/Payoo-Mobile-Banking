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

    const currentBalannce = getBalance();

    const newBalance = currentBalannce - Number (cashoutAmount);

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

        setBalance(newBalance);

        // adding transaction history

        //Step 1: fetch transaction-container

        const transHistory = document.getElementById('transaction-container')

        //Step 2: create new div

        const newHistory = document.createElement('div');

        //Step 3: add new div innerHTML 

        newHistory.innerHTML = `
        
        <div id="transaction-card" class="p-5 bg-base-100 rounded-lg">

        Cashout Completed Successfully from ${agentNumber}, ${cashoutAmount} Taka on ${new Date()}

        </div>

        `
        //Step 4: append new div to  transaction-container

        transHistory.append(newHistory);

    }

    else{
        alert('Invalid PIN');
        return; 
    }

});