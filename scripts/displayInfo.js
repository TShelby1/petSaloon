console.log("Script");
// Create an obj literal for the pat saloon
const petSaloon={
    names:"The Fashion Pet",
    address:{
        street:"ave univsersity",
        number:"2622",
        zip:"12345",
        city:"TJ",
        state:"B.C"
    },
    workingHours:{
        open:"9:00am",
        close:"5:00pm"
    },
    //create pets array 
    pets:[]
}


//display the pet saloon info in the footer section of the html
// function displaySaloonInfo(){
// document.getElementById("footer-info").innerHTML=petSaloon.names;
// }
// displaySaloonInfo();

function displayPetNames(){
    // document.getElementById("petNames").innerHTML="petSaloo;
    for(let i=0; i<petSaloon.pets.length; i++){
        document.getElementById("petNames").innerHTML+=`<li id=${i}"><p>Pet Name: ${petSaloon.pets[i].petName}</p><p> Pet Gender: ${petSaloon.pets[i].petGender}</p><p> Pet Breed: ${petSaloon.pets[i].petBreed}</p><p> Pet Service: ${petSaloon.pets[i].petService}</p><p> Pet Owner Name: ${petSaloon.pets[i].petOwnerName}</p><p> Pet Contact Phone Number: ${petSaloon.pets[i].petContactPhone}</p> </li>`
    }
}console.log(petSaloon.pets)
displayPetNames();
// alert('this many animals in array' +  petSaloon.pets.length);