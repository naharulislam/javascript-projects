// BMI Report calculation
const weight=80;  //kg
const height=1.75; //m
const BMI=(weight/(height*height));
if(BMI<0 && BMI===0){
    console.log("Invalid Option!");
}
else if(BMI<18.5){
    console.log("Your BMI = "+BMI.toFixed(3) +" Underweight ");
}else if(BMI>=18.5 && BMI<25.0){
    console.log("Your BMI = "+BMI.toFixed(3) +" Normal weight ");
}else if (BMI>=25.0 && BMI<30.0){
    console.log("Your BMI = "+BMI.toFixed(3) + " Overweight ")
}else{
    console.log("Your BMI = "+BMI.toFixed(3) +" Obese ");
}