document.getElementById('pay-btn').addEventListener('click', function(){

    // Fetching bank

    const bank = getValueFromInput('bank');
    if (bank == 'Select Bank') {
        alert('Please select a bank!');
        return;
    }

    // Fetching the agent number

    const accNumber = getValueFromInput('acc-number');

    if(accNumber.length != 11){
        alert('Invalid Agent Number');
        return;
    }

   // Fetching cashout amount

    const billAmount = getValueFromInput('bill-amount');

    // Fetching account balance

    const currentBalannce = getBalance();

    const newBalance = currentBalannce - Number (billAmount);

    if(newBalance < 0){
        alert('Invalid Amount')
        return;
    }

    // Fetching Cashout Pin

    const payBillPin = getValueFromInput('payBill-pin')

    // Check Pin Validation

    if (payBillPin === '1234') {
        alert('Bill Payment Successfull');

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

        Bill Paid Successfully from ${accNumber}, ${billAmount} Taka on ${new Date()}

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