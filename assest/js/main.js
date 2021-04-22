// Chiedi il nome all'utente
var userName = prompt("Come ti chiami?");

//Chiedi il cognome all'utente
var userSurname = prompt("Qual è il tuo cognome?");

//Chiedi colore preferito
var favColor = prompt("Qual'è il tuo colore preferito?");

//Scrivere password in modo esplicito
document.getElementById('password-user').innerHTML = userName + userSurname + favColor + 21;



//Scrivere password toLoweCase
var userPassword = userName + userSurname + favColor + 21;
document.getElementById('password-user-lowercase').innerHTML = userPassword.toLowerCase();
