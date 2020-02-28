
//el double equals en java es triple equals en script
// let para declarar cualquier variable, y a diferencia
// de java no se necesita poner el tipo adelante
// switch, case and break 
//metodos is function

// en clase student podria tener 
let students = [];
let courses =[];

console.log("test!!!!");
console.log(students);
setTimeout(()=>{
    let result1 =document.getElementById("ButtonS");
    console.log(result1);
    if(result1){
        console.log("adding event listener for buttonC")
        result1.addEventListener("click",addStudent); 
    }
},2000)



function addStudent(){
  
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
}


   

   function  addCourse(){
    let course = {
   
        
        nameC: document.getElementById("namec").value,
        iDC: document.getElementById("idc").value,
        seatLimit: document.getElementById("seat capacity").value,
        degreeC: document.getElementById("degreec").value
       
    
        }
courses.push(course);
document.forms[0].reset;
alert("The course has been added succesfully");

    }


    var result =document.getElementById("ButtonC");
    if(result){
        ButtonC.addEventListener("click",addCourse);
    }

    function deleteStudent(student){

    }

   function deleteCourse(course){

    }

   function editStudentInfo(){

    }

    function editCourseInfo(){

    }
