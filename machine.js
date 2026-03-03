// Take id input

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

// get balance 

function getBalance() {
    const balanceInput = document.getElementById('balance');

    const balance = balanceInput.innerText;

    return Number(balance);
}

// set balance

function setBalance(value){
    const balanceInput = document.getElementById('balance');
    balanceInput.innerText = value;

}