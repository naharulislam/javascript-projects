# 🎓 Grade Calculator

A beginner-friendly JavaScript project that calculates a student's grade based on their marks using the `switch(true)` statement. The program validates the input and displays the appropriate grade along with the exam result.

---

## 🚀 Features

- 📊 Calculate student grades
- ✅ Validate marks (0–100)
- 🎯 Assign grades based on score ranges
- 🎉 Display pass or fail status
- ⚠️ Handle invalid input

---

## 📂 Project Structure

```
03-grading-system/
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
- Comparison Operators
- Logical Operators (`&&`, `||`)
- `switch(true)` Statement
- Conditional Logic
- Console Output

---

## 📋 Grading Rules

| Marks | Grade | Result |
|------:|:-----:|:------:|
| 80 - 100 | A+ | Pass |
| 70 - 79 | A | Pass |
| 60 - 69 | A- | Pass |
| 50 - 59 | B | Pass |
| 40 - 49 | C | Pass |
| 33 - 39 | D | Pass |
| 0 - 32 | F | Fail |
| Less than 0 or Greater than 100 | Invalid | Invalid Input |

---

## 💻 Example Outputs

### Example 1

**Input**

```text
Student Marks: 85
```

**Output**

```text
Congratulations! You have passed the exam.
Your Grade is A+
```

---

### Example 2

**Input**

```text
Student Marks: 65
```

**Output**

```text
Congratulations! You have passed the exam.
Your Grade is A-
```

---

### Example 3

**Input**

```text
Student Marks: 25
```

**Output**

```text
Sorry! You have failed the exam.
Don't lose hope. Try again next time.
```

---

### Example 4

**Input**

```text
Student Marks: 120
```

**Output**

```text
Invalid Number!
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

- Student marks are hardcoded.
- User input is not implemented.
- The program displays output in the console only.

---

## 🚀 Future Improvements

- Accept marks from user input.
- Display percentage along with the grade.
- Show GPA based on the grade.
- Generate a complete student report.
- Store multiple students' results using arrays and objects.
- Build a menu-driven grading system.

---

## 👨‍💻 Author

**Naharul Islam Nadim**

Aspiring MERN Stack Developer

Currently learning JavaScript by building beginner-friendly projects and improving problem-solving skills.

---

⭐ If you found this project helpful, consider giving the repository a star!