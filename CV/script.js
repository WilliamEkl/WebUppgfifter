// Det hät är ett obejkt med information om mig
const infoWilliam = {
    name: "William Eklund",
    email: "william.eklund2@elev.ga.ntig.se",
    phone : "073 957 05072",
    address: "Älta Strandväg, Stocholm, Sverige",
    born: "2005-05-27",
    gymnasim: "NTIG Nacka Strand, stocholm",
    inrikting: "Teknik och info media"
}

// Koden nernför är inforamtion om mig som står på cv:t och jag har använt mig av js obejekten för att skriva information om mig
const InfoName = document.getElementById("name");
InfoName.innerHTML = infoWilliam.name;

const InfoEmail = document.getElementById("infoEmail");
InfoEmail.innerHTML = "Email: " + infoWilliam.email;

const InfoPhone = document.getElementById("infoTelefon");
InfoPhone.innerHTML = "Telefonnummer: " + infoWilliam.phone;

const InfoAdress = document.getElementById("infoAdress");
InfoAdress.innerHTML = "Adress: " + infoWilliam.address;

const InfoBorn = document.getElementById("infoFödd");
InfoBorn.innerHTML = "Födelsedatum: " + infoWilliam.born;

const InfoGymnasim = document.getElementById("gymnasium");
InfoGymnasim.innerHTML = "Gymnasium: " + infoWilliam.gymnasim;

const InfoInrikting = document.getElementById("inrikting");
InfoInrikting.innerHTML = "Inrikting: " + infoWilliam.inrikting;







//Det här är mina variabler till min darkmode function + containerns backgrunds färg
let container = document.getElementById('container');
let darkModeBtn = document.getElementById('darkMode-btn');
let body = document.getElementById('body');
container.style.backgroundColor = 'white';

//.addEventListener säger att när någon trycker('click') på darkModeBtn så ska utsendet ändars om containerns
//bakgrund är vit och om den inte är vit ska den ändra tillbacka utsendet till orginal utsendet.
//Sammanfattningsvis är koden en JavaScript-funktion som byter mellan två olika färgteman på en webbsida, 
//beroende på vilken färg bakgrunden på containern har. 
darkModeBtn.addEventListener('click',() => {
  if (container.style.backgroundColor === 'white') {
    container.style.backgroundColor = 'rgb(73, 73, 73)';
    container.style.color = 'white';
    body.style.backgroundColor = 'gray';
    darkModeBtn.innerText = "Light mode";
  } 
  else {
    container.style.backgroundColor = 'white'; 
    container.style.color = 'black';
    body.style.backgroundColor = 'white';
    darkModeBtn.innerText = "Dark mode";
  }
});







let fontStyleBtn = document.getElementById('fontStyle-btn');//variabl till functionen nerran
container.style.fontFamily = "Arial, Helvetica, sans-serif"//text still på CV:t

//Den här koden fungerar väldigt likt som darkmode fucktionen ovanför men istället för att byta färgtema 
//så ändrar den text stilen istället
fontStyleBtn.addEventListener("click", () => {
  if (container.style.fontFamily === "Arial, Helvetica, sans-serif") {
    container.style.fontFamily = "Verdana, Tahoma, sans-serif";
    fontStyleBtn.innerText = "Byt tillbacka typsnittet";
  } 
  else {
    container.style.fontFamily = "Arial, Helvetica, sans-serif";
    fontStyleBtn.innerText = "Byt typsnitt";
  }
});







const containerWidth = parseInt(window.getComputedStyle(container).getPropertyValue("max-width"));//den tar max-widths nuvarande värde fårn container 
let changeWidthValue = containerWidth;

//Det här är en function som säger att om changeWidthValue är mindre eller lika med 90 så ska max-width öka med 5 på containern.
//Den här funktionen har dock lite problem då min CCS kod @media only screen ändrar värdet på max-width och kan förstöra resposnviviteten.
//Tyvär så har jag för lite tid för att fixa det och jag vet inte riktigt hur jag ska göra det.
function increaseWidth(){
  if (changeWidthValue <= 90){
    let containerElement = document.getElementById("container");
    changeWidthValue += 5;
    containerElement.style.maxWidth = changeWidthValue + "vw";
  } 
}
//Den här koden gör samma sak fast minskar max width så länge changeWidthValue är större eller lika med 45
function decreaseWidth(){
  if (changeWidthValue >= 45){
    let containerElement = document.getElementById("container");
    changeWidthValue -= 5;
    containerElement.style.maxWidth = changeWidthValue + "vw";
  }
}







const profileButton = document.getElementById("file1");
let imagePreview = document.getElementById("profile-pic");

//När användaren väljer en fil genom att klicka på "profileButton" på CV:t, kommer en funktion att köras.
//Funktionen hämtar den valda filen, skapar en FileReader som sedan använder "load" händelsehanteraren
//för att ladda innehållet i filen som en URL. När filen har lästs in som en URL säts imagePreview.src-attributet
//på URL:en för att sedan kunna visa bilden på CV:t. Efter det så spars bilden lokalt med nyckeln "pictrureData" 
//för att kalla bilden
profileButton.addEventListener("change", function() {
  let file = this.files[0];
  let reader = new FileReader();
  reader.addEventListener("load", function() {
      imagePreview.src = reader.result;
      localStorage.setItem("pictrureData", reader.result);
  });
  reader.readAsDataURL(file);
});

let savedpictrureData = localStorage.getItem("pictrureData");
imagePreview.src = savedpictrureData;