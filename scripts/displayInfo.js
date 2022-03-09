console.log("Script");
// Create an obj literal for the pat saloon
const petSaloon={
    name:"The Fashion Pet",
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
            name:"bob",
            age:50,
            gender:"Male",
            breed:"Dane",
            service:"grooming",
            ownerName:"Shaggy",
            contactPhone:"12345678"
            
        },
        {  
            name:"tom",
            age:50,
            gender:"Male",
            breed:"chihuahua",
            service:"grooming",
            ownerName:"Shaq",
            contactPhone:"12345678"
            
        },
        {  
            name:"george",
            age:50,
            gender:"Male",
            breed:"heeler",
            service:"dental",
            ownerName:"thomas",
            contactPhone:"12345678"
            
        },
        {  
            name:"ox",
            age:50,
            gender:"Male",
            breed:"golden retriever",
            service:"deworming",
            ownerName:"candy",
            contactPhone:"12345678"
            
        },
        {  
            name:"gizmo",
            age:50,
            gender:"Male",
            breed:"lab",
            service:"wellnes visit",
            ownerName:"Tina",
            contactPhone:"12345678"
            
        }
    ]
}
console.log(petSaloon.address.zip);
console.log(petSaloon.pets.length);
// console.log(petSaloon.pets[0].service);





//display the pet saloon info in the footer section of the html
function displaySaloonInfo(){
document.getElementById("footer-info").innerHTML=`Welcome ${petSaloon.name}... in ${petSaloon.address.city}`;
}
displaySaloonInfo();

function displayPetNames(){
document.getElementById("petNames").innerHTML=`${petSaloon.pets[3].service}`;
}
displayPetNames();