document.getElementById('send-btn').addEventListener('click', function(){

    // Fetching the agent number

    const userNumber = getValueFromInput('user-number');

    if(userNumber.length != 11){
        alert('Invalid Agent Number');
        return;
    }

   // Fetching cashout amount

    const sendMoneyAmount = getValueFromInput('sendMoney-amount');

    // Fetching account balance

    const currentBalannce = getBalance();

    const newBalance = currentBalannce - Number (sendMoneyAmount);

    if(newBalance < 0){
        alert('Invalid Amount')
        return;
    }

    // Fetching Cashout Pin

    const sendMoneyPin = getValueFromInput('sendMoney-pin')

    // Check Pin Validation

    if (sendMoneyPin === '1234') {
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

        Send Money Successfully to ${userNumber}, ${sendMoneyAmount} Taka on ${new Date()}

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