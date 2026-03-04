document.getElementById('bonus-btn').addEventListener('click', function(){

    // Fetching bank acc num

    const coupon = getValueFromInput('coupon');

    if(coupon === 'payoo100'){
        
    // Update balance

    const currentBalance = getBalance() + 100;
    setBalance(currentBalance);

    }
    
    else if(coupon === 'payoo1000'){

    // Update balance

    const currentBalance = getBalance() + 1000;
    setBalance(currentBalance);
    
    }


    

    else{

        alert('Invalid Coupon')
        return;



    }
})