// function basicOp(operation, value1, value2)
// {
//     answer = "";
//     switch (operation){
//        case "+":
//             return value1 + value2;
//         case "-":
//             return value1 - value2;
//         case "*":
//             return value1 * value2;
//         case "/":
//             return value1 / value2;
//     }
// }
// console.log(basicOp("-", 2, 2));

// function digitize(n) {
//     n = n.toString();
//     answer = [];
//     for(i = 0;i < n.length; i++){
//       answer.push(parseInt(n[i]));
//     }
//     return answer.reverse();
// }
// console.log(digitize(35231));

// function digitize(n) {
//     return n.toString().split("").reverse().join("");
// }
// console.log(digitize(35231));

// function createPhoneNumber(numbers){
//     numbers.splice(0, 0, "(")
//     numbers.splice(4, 0, ")")
//     numbers.splice(5, 0, " ")
//     numbers.splice(9, 0, "-");
//     return numbers.join("");
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// numbers.splice(0, 0, "(");
// numbers.splice(4, 0, ")");
// numbers.splice(5, 0, " ");
// numbers.splice(9, 0, "-");
// numbers = numbers.join("")
// console.log(numbers);

// age = 60;
// if(age < 18){
//     console.log("£8");
// } else if (age >= 60){
//     console.log("7.50");
// } else {
//     console.log("£10.95");
// }

// pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }
// pressGrindBeans();

// favColour = (colour) => {
//     console.log(`My favourite colour is ${colour}.`);
// }
// favColour("blue");

// coffeeIsGrinding = false;
// pressGrindBeans = () => {
//     if(coffeeIsGrinding){
//         console.log("Stopping the grind")
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin")
//         coffeeIsGrinding = true;
//     }
// }
// pressGrindBeans();
// pressGrindBeans();

// accNumber = 50449921;
// cashWithdrawal = (amount, accNum) => {
//     console.log(`Withdrawing ${amount} from account ${accNum}.`);
// }
// cashWithdrawal(300, accNumber);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50449921);

// addUp = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addUp(2,5));

// multiplyByNineFifths = (num) => {
//     return num * (9/5);
// }
// getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// }
// console.log(`The temperature is ${getFahrenheit(20)}F.`);

// factorial = (n) => {
//     if (n === 0 || n === 1){
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(100));

// orderCount = 0;
// order = [];
// takeOrder = (topping, person) => {
//     console.log(`${person} wants a pizza with ${topping}.`);
//     orderCount++;
//     order.push(`${orderCount}: ${person} - ${topping}`);
//     for (i in order){
//         console.log(order[i]);
//     }
// }
// takeOrder("pepperoni","George");
// takeOrder("chicken","Bob");

inputtedPin = 0000;
requestedAmmount = 20;
isPinCorrect = (pinInput) => {
    return pinInput == selectedAccount.accPin;
}
sufficientBalance = (requestedAmmount) => {
    return requestedAmmount <= selectedAccount.balance;
}
cashMachine = () => {
    if (isPinCorrect(inputtedPin) && sufficientBalance(requestedAmmount)){
        selectedAccount.balance -= requestedAmmount;
        return `Request for £${requestedAmmount} accepted. Remaining balance is £${selectedAccount.balance}.`;
    } else {
        if (sufficientBalance(requestedAmmount)){
            return `request for £${requestedAmmount} declined. Incorrect pin.`;
        } else {
            return `request for £${requestedAmmount} declined. Insufficient balance.`;
        }
    }
}
class account {
    constructor(accNum, accPin, balance){
        this.accNum = accNum;
        this.accPin = accPin;
        this.balance = balance;
    }
}
account = new account(123, 0000, 100);
selectedAccount = account;
console.log(cashMachine());