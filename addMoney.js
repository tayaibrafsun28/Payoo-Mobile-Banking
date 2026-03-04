document.getElementById('add-money-btn').addEventListener('click', function(){

    // Fetching bank

    const bank = getValueFromInput('bank');
    if(bank == 'Select Bank'){
        alert('Please slect a bank!');
        return;
    }

    // Fetching bank acc num

    const accountNumber = getValueFromInput('account-number');

    if(accountNumber.length != 11){
        alert('Invalid Account number')
        return;
    }

    // Fetching bank acc num

    const addMoneyAmount = getValueFromInput('add-money-amount');

    // Update balance

    const currentBalance = getBalance() + Number(addMoneyAmount);

        // Fetching Cashout Pin
        
        const addMoneyPin = getValueFromInput('add-money-pin')

        // Check Pin Validation

    if (addMoneyPin === '1234') {
        alert(`Added Amount Successfully from ${bank} at ${accountNumber}`);
        setBalance(currentBalance);

        // adding transaction history

        //Step 1: fetch transaction-container

        const transHistory = document.getElementById('transaction-container')

        //Step 2: create new div

        const newHistory = document.createElement('div');

        //Step 3: add new div innerHTML 

        newHistory.innerHTML = `
        
        <div id="transaction-card" class="p-5 bg-base-100 rounded-lg space-y-5">

        Added Amount Successfully from ${bank} at Account No. ${accountNumber} on ${new Date()}

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