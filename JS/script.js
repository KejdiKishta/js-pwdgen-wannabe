//TEST
// alert("Ciao");

// Chiedi all’utente il suo nome

let userName = prompt("Ciao! Come ti chiami?"); //*string
console.log(userName, typeof userName);

// Poi chiedi il suo cognome

let userSurname = prompt("Bene! E il tuo cognome qual è?") //*string
console.log(userSurname, typeof userSurname);

// Poi chiedi il suo colore preferito

let userColor = prompt("Ottimo! Ora mi sapresti dire il tuo colore preferito?") //*string
console.log(userColor, typeof userColor);

// Crea una const con la somma delle variabili precendenti

// const newPass = userName + userSurname + userColor + "21" //*string con operatore +
const newPass = `${userName}${userSurname}${userColor}21` //* string con template literal
console.log(newPass, typeof newPass);

// Infine scrivi sulla pagina nomecognomecolorepreferito21

document.getElementById("result").innerHTML = newPass