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

    }

    else{
        alert('Invalid PIN');
        return; 
    }
});