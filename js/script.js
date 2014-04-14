/**
 * Ternary Operators Created by puhrome on 4/14/14.
 */
//shorter one line way to write if else statement
//represented by ?

/*if(condition){
    do if true:
}else{
    do if false;
}

(conditon) ? do if true : do if false; //ternary examply

var gpa = 48;*/

//if gpa is over min 2.0 score, the student can graduate
/*if(gpa > 2.0){
    console.log("You can graduate!");
}else{
    console.log("GPA is too low!");
}*/

/*(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!";*/
//benefit of using ternary is the return value

var age = 6;
var book;

//if the child is under 10 they get Green Eggs and Ham otherwise they get The Time Machine
/*if(age < 10){
    book = "Green Eggs and Ham";
}else{
    book = "The Time Machine";
}*/

book = (age < 10)? "Green Eggs and Ham" : "The Time Machine";
//ternary conditional allow to assign with equal sign
console.log(book);