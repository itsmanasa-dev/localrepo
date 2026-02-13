let marks=prompt("Enter the marks");
let grade;
if (marks>=80 && marks<=100){
    grade="A";
} else if (marks>=70 && marks<=89){
    grade="B"; }
else if (marks>=60 && marks<=69) {
    grade="C";
}else if (marks>=50 && marks<=59) {
    grade="D";;
}else{
    grade="F";
}

console.log("According to the score the grade is:",grade);
