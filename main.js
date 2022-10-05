var balance = 1000;
var choise;
var amount;
function runPrompt() {
    choise = prompt("Please enter your choise (+ or -)", "+");
    
    switch (choise) {
        case '+':
            NumberPrompt();
            break;
        case '-':
            NumberPrompt();
            break;
        default:
            wrongInput();
            break;
    }
}


function NumberPrompt() {
    amount = prompt("Enter the amount", "0");
    amount = amount * 1;
    
    if (amount != NaN && amount > 0) {
        if (choise == "+") {
            balance += amount;
            EndOfApp();
        }
        else
            Withdraw();
    }
    else
        wrongInput();
}



function Withdraw() {
    if (amount <= balance) {
        balance -= amount;
        EndOfApp();
    }
    else
        wrongInput();
}


function wrongInput() {
    let tryChoise = confirm("Wrong Input! \n\nDo you want to try again?");
    if (tryChoise)
        runPrompt();
    else
        EndOfApp()
}

function EndOfApp() {
    let balanceText = "Your balance: " + balance;
    alert(balanceText + "\n\nThanks for using app");
}
