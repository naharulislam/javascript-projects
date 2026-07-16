// Grade Calculator

const studentMarks=77;
switch(true){
    case studentMarks <0 || studentMarks >100:
        console.log("Invalid Number!");
        break;
    case studentMarks>=80 && studentMarks<=100 :
        console.log("Congratulation! you have passed the exam ");
        console.log("Your Grad is A+ ");
        break;
    case studentMarks>=70 && studentMarks<80 :
        console.log("Congratulation! you have passed the exam ");
        console.log("Your Grad is A ");
        break;
    case studentMarks>=60 && studentMarks<70 :
        console.log("Congratulation! you have passed the exam ");
        console.log("Your Grad is A- ");
        break;
    case studentMarks>=50 && studentMarks<60 :
        console.log("Congratulation! you have passed the exam ");
        console.log("Your Grad is B ");
        break;
    case studentMarks>=40 && studentMarks<50 :
        console.log("Congratulation! you have passed the exam ");
        console.log("Your Grad is C ");
        break;
    case studentMarks>=33 && studentMarks<40 :
        console.log("Congratulation! you have passed the exam ");
        console.log("Your Grad is D ");
        break;
    case studentMarks<33 :
        console.log("Sorry! you have failed in the exam ");
        console.log("Don't lose hope. try again next time ");
        break;
        default:
            console.log("pleas enter a valid number !");
}