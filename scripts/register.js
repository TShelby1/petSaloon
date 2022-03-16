// create the constructor
let x=0;
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petService=service;
    this.petOwnerName=ownerName;
    this.petContactPhone=contactPhone;
    this.id=x++;
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
        displayPetsTable();
    }

}


// steps are to travel the array, create the template, then display the tmp on the html
function displayPetsTable(){
    let tmp="";
    // travel the array 
    for(let i=0; i<petSaloon.pets.length; i++){
        // create the template
        tmp+=`
        <table>
            <tr id="${petSaloon.pets[i].id}">
                <td> Pet Name: ${petSaloon.pets[i].petName} 🐾</td> 
                <td> Pet Age: ${petSaloon.pets[i].petAge}
                <td> Pet Gender: ${petSaloon.pets[i].petGender}</td>
                <td> Pet Breed: ${petSaloon.pets[i].petBreed}</td>
                <td> Pet Service: ${petSaloon.pets[i].petService}</td>
                <td> Pet Owner Name: ${petSaloon.pets[i].petOwnerName}</td>
                <td> Pet Contact Phone Number: ${petSaloon.pets[i].petContactPhone}</td>
                <td> <button onclick="deletePet(${petSaloon.pets[i].id});">Delete</button>
            </tr>
        </table`;
        
    } console.log(petSaloon.pets.length);
    document.getElementById("petTables").innerHTML=tmp;
}
function deletePet(petId){
    console.log("Delete Pet..", petId)
   //travel the array to search the petID
   for(let i=0; i<petSaloon.pets.length; i++){
       let pet=petSaloon.pets[i];

       if(pet.id==petId){
           deleteIndex=i;
           console.log("I found the pet..", deleteIndex);
       }
   }
//    remove the pet from the array
   petSaloon.pets.splice(deleteIndex,1);
//  remove the pet from the html
    document.getElementById(petId).remove();
}
function searchPet(){
    let searchString=document.getElementById("txtSearch").value;
    console.log(searchString);
    for(let i=0; i<petSaloon.pets.length; i++){
        let pet=petSaloon.pets[i];
        if(pet.petName.toLowerCase()==searchString.toLowerCase() || 
            pet.petGender.toLowerCase()==searchString.toLowerCase() ||
            pet.petBreed.toLowerCase()==searchString.toLowerCase() ||
            pet.petService.toLowerCase()==searchString.toLowerCase() ||
            pet.petOwnerName.toLowerCase()==searchString.toLowerCase() ||
            pet.petContactPhone.toLowerCase()==searchString.toLowerCase()){
            console.log("I found it", pet.petName)
            document.getElementById(pet.id).classList.add('bg-color');
        }
        else{
            document.getElementById(pet.id).classList.remove('bg-color');
        }
    }

}    
function init(){
    // create some pets
    let scooby = new Pet("Scooby",50,"male","goldie","worms","tom","7609876543");
    let scrappy = new Pet("scrappy",50,"female","lab","nails","jeff","1234567");
    petSaloon.pets.push(scooby,scrappy);
    displayPetsTable();
}
window.onload=init;