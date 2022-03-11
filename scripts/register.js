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

// create some pets
let scooby = new Pet("Scooby",50,"sdfsdf","dfgdfg","sdfgdfgdfg","sdfsdf","7609876543");
let scrappy = new Pet("scrappy",50,"dfgdfg","tyutyu","hjkljkl","sdfsdf","1234567");

petSaloon.pets.push(scooby,scrappy);

// console.log(petSaloon.pets);

function register(){
    console.log(inputPetName.value,inputPetAge.value, inputPetGender.value, inputPetBreed.value, inputPetService.value, inputPetOwnerName.value, inputPetContactPhone.value);
    // create the object
    let thePet = new Pet(inputPetName.value, inputPetAge.value, inputPetGender.value, inputPetBreed.value, inputPetService.value, inputPetOwnerName.value, inputPetContactPhone.value);

    console.log(thePet)
    // push the object
    petSaloon.pets.push(thePet);
    //display the object in the console
}
console.log(petSaloon.pets)

