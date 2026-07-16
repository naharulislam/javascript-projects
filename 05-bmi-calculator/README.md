# 🏥 BMI Calculator

A beginner-friendly JavaScript project that calculates a person's **Body Mass Index (BMI)** using their weight and height. The program classifies the BMI into different health categories using conditional statements.

---

## 🚀 Features

- ⚖️ Calculate Body Mass Index (BMI)
- 📊 Classify BMI into health categories
- 📏 Uses weight (kg) and height (m)
- 🔢 Displays BMI up to 3 decimal places
- ✅ Beginner-friendly JavaScript project

---

## 📂 Project Structure

```
05-BMI-calculator/
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
- Arithmetic Operators
- Comparison Operators
- Conditional Statements (`if`, `else if`, `else`)
- Floating Point Numbers
- `toFixed()` Method

---

## 📋 BMI Formula

```
BMI = Weight (kg) / Height² (m²)
```

Example:

```
Weight = 80 kg
Height = 1.75 m

BMI = 80 / (1.75 × 1.75)
BMI = 26.122
```

---

## 📊 BMI Categories

| BMI Range | Category |
|-----------|----------|
| Less than 18.5 | Underweight |
| 18.5 – 24.9 | Normal Weight |
| 25.0 – 29.9 | Overweight |
| 30.0 and above | Obese |

---

## 💻 Example Output

### Example 1

**Input**

```text
Weight: 80 kg
Height: 1.75 m
```

**Output**

```text
Your BMI = 26.122
Category: Overweight
```

---

### Example 2

**Input**

```text
Weight: 55 kg
Height: 1.70 m
```

**Output**

```text
Your BMI = 19.031
Category: Normal Weight
```

---

### Example 3

**Input**

```text
Weight: 45 kg
Height: 1.70 m
```

**Output**

```text
Your BMI = 15.571
Category: Underweight
```

---

## ▶️ How to Run

1. Open the project folder.

2. Open the terminal.

3. Run the program:

```bash
node index.js
```

---

## 📌 Current Limitations

- Weight and height are hardcoded.
- User input is not implemented.
- Input validation is limited.

---

## 🚀 Future Improvements

- Take weight and height as user input.
- Validate that weight and height are greater than zero.
- Display health recommendations based on BMI.
- Support different measurement units (kg/lb, m/ft).
- Create a menu-driven BMI calculator.

---

## 👨‍💻 Author

**Naharul Islam Nadim**

Aspiring MERN Stack Developer

Currently learning JavaScript by building beginner-friendly projects and improving problem-solving skills.

---

⭐ If you found this project helpful, consider giving the repository a star!