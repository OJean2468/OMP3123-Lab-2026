/* purpose: 

 Purpose: 

 ArrayMethods: 
    ForEach() 
    map() 
    reduce() 
    filter() 
    search()

*/ 

const courseList = ["COMP3213", "COMP3122", "COMP1238", "LAMO002"]
courseList.forEach((course) => {

    console.log(course + "!")

})

const filteredCourses = courseList.filter((currentElement) => {

    return currentElement[0] === "C"

})

console.log(filteredCourses)