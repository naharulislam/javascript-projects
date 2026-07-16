# 🏧 ATM Withdrawal System

A beginner-friendly JavaScript project that simulates a simple ATM withdrawal system. The program validates the withdrawal request based on predefined rules and displays the remaining account balance after a successful transaction.

---

## 🚀 Features

- 💰 Check available account balance
- 💵 Withdraw a specified amount
- ✅ Validate withdrawal amount
- 💯 Ensure the amount is a multiple of 100
- ❌ Prevent invalid withdrawal requests
- 📊 Display the remaining balance after a successful withdrawal

---

## 📂 Project Structure

```
04-atm-withdrawal/
│
├── index.js
└── README.md
```

---

## 🛠️ Technologies Used

- JavaScript (ES6)
- Node.js
- VS Code

---

## 📖 Concepts Practiced

- Variables
- Data Types
- Arithmetic Operators
- Comparison Operators
- Logical Operators (`&&`)
- Conditional Statements (`if`, `else if`, `else`)
- Console Output

---

## 📋 Business Rules

| Rule | Description |
|------|-------------|
| Withdrawal amount must be greater than `0` | Prevent invalid withdrawals |
| Withdrawal amount must be a multiple of `100` | ATM dispenses money in multiples of 100 |
| Withdrawal amount must not exceed the account balance | Prevent overdraft |
| If all conditions are met | Complete the withdrawal and show the remaining balance |

---

## 💻 Example Outputs

### Example 1: Successful Withdrawal

**Input**

```text
Initial Balance: 5000
Withdrawal Amount: 4000
```

**Output**

```text
Balance = 5000
Withdraw = 4000
Withdrawal Successful!
Remaining Balance = 1000
```

---

### Example 2: Invalid Amount

**Input**

```text
Withdrawal Amount: -500
```

**Output**

```text
Please enter a valid amount.
```

---

### Example 3: Amount Not Divisible by 100

**Input**

```text
Withdrawal Amount: 2550
```

**Output**

```text
Please enter an amount that is a multiple of 100.
```

---

### Example 4: Insufficient Balance

**Input**

```text
Initial Balance: 5000
Withdrawal Amount: 7000
```

**Output**

```text
Insufficient balance!
```

---

## ▶️ How to Run

1. Open the project folder.

2. Open the terminal.

3. Run the following command:

```bash
node index.js
```

---

## 📌 Current Limitations

- Initial balance is hardcoded.
- Withdrawal amount is hardcoded.
- User input is not implemented.
- The program does not allow withdrawing the full balance because it uses `<` instead of `<=`.

---

## 🚀 Future Improvements

- Take the withdrawal amount from user input.
- Allow users to withdraw the full balance if desired.
- Display a transaction receipt.
- Add PIN verification.
- Support deposits and balance inquiries.
- Build a complete ATM menu using loops and functions.

---

## 👨‍💻 Author

**Naharul Islam Nadim**

Aspiring MERN Stack Developer

Learning JavaScript through hands-on projects and problem-solving.

---

⭐ If you found this project helpful, consider giving the repository a star!