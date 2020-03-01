
let students = [];
let courses =[];


console.log("test!!!!");
console.log(document.getElementById("ButtonS"));

  

const addStudent = (ev) =>{
    ev.preventDefault();
  
    let student = {
    
        name: document.getElementById("name").value,
        lastName:document.getElementById("lastname").value,
        iD: document.getElementById("id").value,
        age :document.getElementById("age").value,
        degree: document.getElementById("degree").value
    }
    students.push(student);
    document.forms[0].reset;
    console.log("Reached here");
    console.log(students);
}
document.addEventListener('DOMContentLoaded',()=>{
document.getElementById("ButtonS").addEventListener("click", addStudent);
});

   const  addCourse =  (ev) =>{
    ev.preventDefault();
    let course =  {
   
        
        nameC: document.getElementById("namec").value,
        iDC: document.getElementById("idc").value,
        seatLimit: document.getElementById("seat capacity").value,
        degreeC: document.getElementById("degreec").value
       
    
        }
courses.push(course);
document.forms[0].reset;
alert("The course has been added succesfully");

    }
    document.addEventListener('DOMContentLoaded',()=>{
        document.getElementById("ButtonC").addEventListener("click", addCourse);
        });


   

    function deleteStudent(student){

    }

   function deleteCourse(course){

    }

   function editStudentInfo(){

    }

    function editCourseInfo(){

    }
