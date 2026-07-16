// Challenge 1: ATM Withdrawal

// Write a program that checks:
// Initial balance = 5000
// User wants to withdraw = 2500

// Rules:

// Amount must be greater than 0.
// Amount must be a multiple of 100.
// Balance must be enough.
// Print the remaining balance.

const initialBalance=5000;
const withdrawalAmount=4000;
const remainingBalance=initialBalance-withdrawalAmount;
if(withdrawalAmount>0 && withdrawalAmount<initialBalance && withdrawalAmount%100===0){
     console.log("Balance = " + initialBalance);
     console.log("Withdraw = "+withdrawalAmount);
     console.log("Withdrawal Successful!")
     console.log("Remaining Balance = "+remainingBalance);
}else if(withdrawalAmount<0){
    console.log("Pleas Enter a valid amount");
}else if(withdrawalAmount%100 !==0){
    console.log("Pleas Enter a amount that can divided by 100");
}
else{
    console.log("Insufficient amount !");
}