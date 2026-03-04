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

// show specific section

function showOnly(id){
    const addMoney = document.getElementById('add-money');

    const cashout = document.getElementById('cashout');

    const transaction = document.getElementById('transaction');


    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    transaction.classList.add('hidden');
    sendMoney.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}