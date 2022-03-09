let names=[];

console.log("Script");

let student= {
    firstName:"brandon",
    lastName:"Britt",
    age:99,
    email:"blahblah@gmail.com",
    isActive:true,
    fullName:function(){
        return this.firstName+ " " + this.lastName;
    }
};
console.log(student.fullName());

function displayStudent(){
    // display students information on the html
    // document.getElementById("student-info").innerHTML="";
    document.getElementById("student-info").innerHTML=`<li>${student.fullName()}</li>`;
}
displayStudent();