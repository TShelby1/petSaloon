// create the constructor
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petService=service;
    this.petOwnerName=ownerName;
    this.petContactPhone=contactPhone;
}
// get information from the inputs
let inputPetName= document.getElementById("txtPetName");
let inputPetAge= document.getElementById("txtPetAge");
let inputPetGender= document.getElementById("txtPetGender");
let inputPetBreed= document.getElementById("txtPetBreed");
let inputPetService= document.getElementById("txtPetService");
let inputPetOwnerName= document.getElementById("txtPetOwnerName");
let inputPetContactPhone= document.getElementById("txtPetContactPhone");




function isValid(aPet){
    // return false when the pet is not valid
    // return true if the pet is valid
    let valid=true;
    // return the error in the console
    if(aPet.petName.length==0){
        // if we get here it means that the name is not valid
        valid=false;
        console.log("Invalid Name")
    }
    if(aPet.petAge.length==0){
        // if we get here it means that the name is not valid
        valid=false;
        console.log("Invalid Pet Age")
    }
    if(aPet.petService.length==0){
        // if we get here it means that the name is not valid
        valid=false;
        console.log("Invalid Pet Service")
    }
    if(aPet.petContactPhone.length==0){
        // if we get here it means that the name is not valid
        valid=false;
        console.log("Invalid Cntact Phone")
    }
    // validations

    return valid;
}

function register(){
    console.log(inputPetName.value,inputPetAge.value, inputPetGender.value, inputPetBreed.value, inputPetService.value, inputPetOwnerName.value, inputPetContactPhone.value);
    
    let thePet = new Pet(inputPetName.value, inputPetAge.value, inputPetGender.value, inputPetBreed.value, inputPetService.value, inputPetOwnerName.value, inputPetContactPhone.value);

    console.log(thePet);

    if(isValid(thePet)){
        petSaloon.pets.push(thePet);
    // display object in html
        displayPets();
    }

}


// steps are to travel the array, create the template, then display the tmp on the html
function displayPets(){
    let tmp="";
    // travel the array 
    for(let i=0; i<petSaloon.pets.length; i++){
        // create the template
        tmp+=`
        <div class="pet">
            <h4> Pet Name:  ${petSaloon.pets[i].petName} 🐾</h4>
            <p> Pet Gender:  ${petSaloon.pets[i].petGender}</p>
            <p> Pet Breed: ${petSaloon.pets[i].petBreed}</p>
            <p> Pet Service: ${petSaloon.pets[i].petService}</p>
            <p> Pet Owner Name: ${petSaloon.pets[i].petOwnerName}</p>
            <p> Pet Contact Phone Number: ${petSaloon.pets[i].petContactPhone}</p>
        </div>`;
        
    }
    document.getElementById("pets").innerHTML=tmp;
}

function init(){
    // create some pets
    let scooby = new Pet("Scooby",50,"male","goldie","worms","tom","7609876543");
    let scrappy = new Pet("scrappy",50,"female","lab","nails","jeff","1234567");
    petSaloon.pets.push(scooby,scrappy);
    displayPets();
}
window.onload=init;