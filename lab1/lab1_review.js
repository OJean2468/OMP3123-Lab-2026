/* 
Purpse: Review JS concepts: 
    Prototypes VS Classes 
    Regular functions, anonymous functions, arrow functions 
    Callback functions 
    MERN: N stands for Node.js
*/

//Var is global vs let is local 

var globalVariable = 100 
var localVariable = 200 
function functionName(){
    let varinFunc = "local"
}
// console.log(varinFunc); It will fail

//Protoype - One time use object from a prototype 

const oneTimeUseObj = {
    prop1: "O'Neal",
    prop2: "Comp3123",
    method1: function (param1) {
        console.log(param1)
    }
}
console.log(oneTimeUseObj)
console.log(oneTimeUseObj.prop1)
console.log(oneTimeUseObj.prop2)
oneTimeUseObj.method1("Pizza")



//Prootype using a constrictor 
function Student(student_name_P, course_P, lunch_p) {
    this.student_name = student_name_P
    this.course = course_P
    this.lunch = lunch_p
    this.method1 = function (param1){
        return param1
    }
}

const morning_student = new Student("ONeal", "comp3123", "Noodles")
console.log(morning_student)
console.log(morning_student.student_name)
console.log(morning_student.course)
console.log(morning_student.method1(morning_student.lunch))

//Classes - always have constructors 
class prof{
    constructor(prof_name_p){
        this.prof_name = prof_name_p
    }
    method1(lunch){
        console.log(lunch)
    }
}

const morning_prof = new prof("Laily")
console.log(morning_prof.prof_name)
morning_prof.method1("Burger")

// Optional Homework: Practice a callback 
// function using an array and the .map()
// function 
