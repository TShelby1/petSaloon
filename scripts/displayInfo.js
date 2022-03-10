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
    pets:[
        {  //first pet
            name:"Bob",
            age:50,
            gender:"Male",
            breed:"Dane",
            service:"grooming",
            ownerName:"Shaggy",
            contactPhone:"12345678"
            
        },
        {  
            name:"Tom",
            age:50,
            gender:"Male",
            breed:"chihuahua",
            service:"grooming",
            ownerName:"Shaq",
            contactPhone:"12345678"
            
        },
        {  
            name:"George",
            age:50,
            gender:"Male",
            breed:"heeler",
            service:"dental",
            ownerName:"thomas",
            contactPhone:"12345678"
            
        },
        {  
            name:"Ox",
            age:50,
            gender:"Male",
            breed:"golden retriever",
            service:"deworming",
            ownerName:"candy",
            contactPhone:"12345678"
            
        },
        {  
            name:"Gizmo",
            age:50,
            gender:"Male",
            breed:"lab",
            service:"wellnes visit",
            ownerName:"Tina",
            contactPhone:"12345678"
            
        }
    ]
}


//display the pet saloon info in the footer section of the html
function displaySaloonInfo(){
document.getElementById("footer-info").innerHTML=petSaloon.names;
}
displaySaloonInfo();

function displayPetNames(){
    console.log("Register");
    let name= prompt('Enter new pet name');
    let age=prompt('Enter pet age');
    let gender=prompt('Enter pet gender');
    let breed=prompt('Enter pet breed');
    let service=prompt('Enter service');
    let ownerName=prompt('Enter owner name');
    let contactPhone=prompt('Enter contact phone');
    petSaloon.pets.push({name, age, gender, breed, service, ownerName, contactPhone});
    document.getElementById("petNames").innerHTML="";
    for(let i=0; i<petSaloon.pets.length; i++){
        document.getElementById("petNames").innerHTML+=`<li id=${i}"><p>Pet Name: ${petSaloon.pets[i].name}</p><p> Pet Gender: ${petSaloon.pets[i].gender}</p><p> Pet Breed: ${petSaloon.pets[i].breed}</p><p> Pet Service: ${petSaloon.pets[i].service}</p><p> Pet Owner Name: ${petSaloon.pets[i].ownerName}</p><p> Pet Contact Phone Number: ${petSaloon.pets[i].contactPhone}</p> </li>`
    }
}
displayPetNames();

alert('this many animals in array' +  petSaloon.pets.length);