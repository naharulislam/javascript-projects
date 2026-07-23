const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1. ADD YOUR STUDENT OBJECT HERE
let studentList = [
  {
    name: "NADIM",
    roll: 36,
    marks: [88, 90, 86, 95, 98],
  },
  {
    name: "NAHARUL",
    roll: 35,
    marks: [78, 92, 88, 99, 87],
  },
  {
    name: "NAFIZ",
    roll: 34,
    marks: [88, 86, 88, 77, 62],
  },
  {
    name: "ANIKA",
    roll: 33,
    marks: [77, 86, 70, 75, 90],
  },
  {
    name: "FAHIM",
    roll: 32,
    marks: [72, 70, 90, 92, 80],
  },
];

let selectedStudent = null;

// 2. ADD YOUR SEPARATE CALCULATION FUNCTIONS HERE
//show student details
function showStudentDetails() {
  console.log("Name   : ", "  ", selectedStudent.name);
  console.log("Roll   : ", "  ", selectedStudent.roll);
  console.log("Marks  : ", "  ", selectedStudent.marks.join(" "));
}
//show total marks
function calculateTotalMarks() {
  let totalMarks = 0;
  for (let mark of selectedStudent.marks) {
    totalMarks += mark;
  }
  console.log("Total Marks   :", "  ", totalMarks);
  return totalMarks;
}
//show average marks
function calculateAverageMarks() {
  let total = calculateTotalMarks();
  let averageMarks = total / selectedStudent.marks.length;
  console.log("Average Marks   :", "  ", averageMarks);
  return averageMarks;
}
//find highest marks
function findHighestMarks() {
  let highestMark = Math.max(...selectedStudent.marks);
  console.log("Highest Mark   :", "  ", highestMark);
  return highestMark;
}
// show lowest mark
function findLowestMark() {
  let lowestMark = Math.min(...selectedStudent.marks);
  console.log("Lowest Mark   :", "  ", lowestMark);
  return lowestMark;
}

// show grade
function calculateGrade() {
  let averageMarks = calculateAverageMarks();
  switch (true) {
    case averageMarks >= 80 && averageMarks <= 100:
      console.log("Grade A+");
      break;
    case averageMarks >= 70 && averageMarks < 80:
      console.log("Grade A");
      break;
    case averageMarks >= 60 && averageMarks < 70:
      console.log("Grade B");
      break;
    case averageMarks >= 50 && averageMarks < 60:
      console.log("Grade C");
      break;
    default:
      console.log("Grade F");
      break;
  }
}
// Function to find a student by roll number
function findStudent() {
  // 1. Asking the user for their roll number
  rl.question("Enter Student Roll Number: ", function (input) {
    // Converting the string input into a number
    let rollNumber = parseInt(input);

    let found = false;

    // 2. Looping through the student list to find a match
    for (let student of studentList) {
      if (student.roll === rollNumber) {
        selectedStudent = student; // Saving the matched student globally
        found = true;
        break; // Stopping the loop since we found the student
      }
    }

    // 3. Checking if student was found or not
    if (found) {
      console.log(
        `\nWelcome, ${selectedStudent.name}! Data loaded successfully.`,
      );
      showMenu(); // Starting the menu loop for this student
    } else {
      console.log("❌ Student not found! Please try enter a valid roll.");
      findStudent(); // Asking for the roll number again (re-looping)
    }
  });
}

// The Interactive Menu System Loop
function showMenu() {
  console.log("\n================================");
  console.log("Student Grade Manager");
  console.log("================================");
  console.log("1. Show Student Details");
  console.log("2. Show Total Marks");
  console.log("3. Show Average Marks");
  console.log("4. Show Grade");
  console.log("5. Find Highest Mark");
  console.log("6. Find Lowest Mark");
  console.log("7. Exit");
  console.log("================================");

  rl.question("Enter your choice (1-7): ", function (choice) {
    switch(choice){
        case '1':
            showStudentDetails();
            showMenu();
            break;
        case '2':
            calculateTotalMarks();
            showMenu()
            break;
        case '3':
            calculateAverageMarks();
            showMenu();
            break;
        case '4':
            calculateGrade();
            showMenu();
            break;
        case '5':
            findHighestMarks();
            showMenu();
            break;
        case '6':
            findLowestMark();
            showMenu();
            break;
                case '7': 
            console.log("Exiting... Goodbye!");
            rl.close();
            break;    
        default:
            console.log("Invalid Option!");
            break;
                        
    }
  });
}

// Starts the application
findStudent();

