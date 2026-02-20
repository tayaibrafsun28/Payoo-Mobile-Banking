document.getElementById('login-btn').addEventListener('click', function(){

    // Fetch mobile number

    const numberInput = document.getElementById("input-number");

    const userNumber = numberInput.value;

    // Fetch pin number

    const pinInput = document.getElementById('input-pin');

    const userPin = pinInput.value;

    // Check the validation by matching fetched data

    if (userNumber === '01974243177' && userPin === '1234') {
        alert('Login Completed');
    }

    else{
        alert('Login Failed');
        return;
    }
})