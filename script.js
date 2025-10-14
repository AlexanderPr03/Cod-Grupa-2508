
// OPERATORII IN JAVASCRIPT

// 1) Operatorii aritmetici - operatori care primesc 2 valori (numerice sau stringuri sau chiar boolean) si ne intorc inapoi un numar, un string

// +
// -
// *
//  /


// ** - ridicarea la putere
console.log(5 ** 5)


// % - impartirea cu rest. Ne da ca si rezultat restul impartirii
console.log(10 % 3)

// 2) Operatorii de comparatie 

// 2.1) Verificarea egalitatii - Loose equality - Verifica doar valoarea interna, nu si tipul de date
//   ==

let parolaDeLaUser = 'qwerty'
let parolaDePeServer = 'qwerty'

console.clear()
console.log('Parolele corespund: ', parolaDeLaUser == parolaDePeServer);

// 2.2) Verificarea inegalitatii - Loose inequality - Verifica doar valoarea interna, nu si tipul de date
//  !=

console.log('Parolele nu corespund: ', parolaDeLaUser != parolaDePeServer);


// 2.3) Verificarea egalitatii - Strict/Strong Equality - Verifica SI tipul de date SI Valoarea interna
// ===


let idUser1 = '13221312'
let idUser2 = 13221312

console.log('Utilizatorii corespund: ', idUser1 === idUser2);

// 2.4) Verificarea inegalitatii - Strict/Strong Inequality - Verifica SI tipul de date SI Valoarea interna
// !==


// 2.5, 2.6, 2.7, 2.8) - Comparatile matematice
// >
// <
// >=
// <=

// Exemplul de mai jos arata ca stringurile pot fi comparate. Una din aplicatiile pentru aceasta functionalitate este ca am putea, de exemplu, sa sortam alfabetic crescator sau descrescator produsele pe o pagina
console.log('adpwadlpamaazxmqwyqc'  >  'adpwadlpamaazxmqwyqb')



// 3) Operatorii LOGICI - operatori care ne permit sa combinam mai multe evaluari de adevar intr-o singura conditie complexa


// 3.1) Operatorul AND - ȘI -  este folosit atunci când dorim ca toate conditțiile sa fie adevărate pentru ca rezultatul final să fie adevărat
//  &&

// 1)
let username = 'Alexand'
let usernameServer = 'Alexander'

// 2)
let emailUser = 'alexande@gmail.com'
let emailServer = 'alexander@gmail.com'

// 3)
parolaDeLaUser = 'qwerty'
parolaDePeServer = 'qwerty';
  
console.log('Utilizatorul se poate autentifica, toate 3 date sunt corecte: ',
    (username === usernameServer) && (emailUser === emailServer) && (parolaDeLaUser === parolaDePeServer))
//                    true                        true                                  false
// AND - inmultire
// 1 * 1 * 1


// 2) Operatorul OR - SAU - cel puțin o valoarea din cele oferite să fie adevărata
// ||
let telefonUser = '0691234'
let telefonServer = '069123456'

console.log('Cel putin una din autentificari este corecta: ', 
    (username === usernameServer) || (telefonUser === telefonServer) || (emailUser === emailServer) )
//            false                            false                                true 

// OR - adunarea
// 0 + 0 + 0 +  ... + 1 + 1 = 2

// O autentificare completa

console.log('Utilizatorul are toate datele corecte (sau email, telefon, username, si parola corecta):',
    (username === usernameServer || telefonUser === telefonServer || emailUser === emailServer) 
            && (parolaDeLaUser === parolaDePeServer))

// (0 + 0 + 0) * 1 = 0


// AND are prioritate in ordinea operatiilor (comparatiilor) in fata OR


// 3) NOT - negatia
// !

console.clear();


// 1) Stringuri - au prioritate la conversia de tip. Orice alt tip de date intr-o operatie cu un string va fi convertit de asemenea in string

// 2) Daca operatia nu poate fi facuta cu stringuri (nu este definita, se trece la conversia in numere):
//  Numere, Booleane
// La conversia de tip
// True   - 1
// False  - 0

// 3) Daca nici operatia cu termenii convertiti in numere nu e posibila (sau termenii nu pot fi convertiti in numere),
// JS va intoarce inapoi rezultatul NaN - Not a Number



console.log(5 + '2')
console.log(5 + 'a')
console.log(5 - 'a');  // NaN - Not a Number

console.log(true + '2');
console.log(true - '2');
console.log(true - 'a');
console.log(true * 'a');
console.log(true / '2');
console.log(true ** 'a');


// + - adunarea pentru siruri de caractere = concatenarea - lipirea a doua siruri de caractere

// Null - 0
// Undefined - NaN

console.log(true + null) // 1
console.log(true + undefined) // NaN


console.clear();
// CONDITIONALII

// 1) Conditionalul if (daca)


parolaDeLaUser = 'qwert'
parolaDePeServer = 'qwerty'

// if - daca
// else - in caz contrar

if ((username === usernameServer || telefonUser === telefonServer || emailUser === emailServer) 
            && (parolaDeLaUser === parolaDePeServer)) {
    console.log('Utilizatorul este autentificat!');
    // trimiteti requestul pe server
    // asteptati raspunsul
    // procesati raspunsul
    // etc
} else {
    console.log('Parola sau loginul sunt incorecte!')
}


// If-else complet

// Edge-cases - Cazurile exceptie care de obicei nu sunt acoperite de codul pe care l-ati scris.
let temperatura = 'Temperature can not be provided.';

if (temperatura < 15) {
    console.log('Temperatura e mai mica de 15 grade. Afara este frig');
} else if (temperatura >= 15 && temperatura <= 25) {
    console.log('Temperatura e intre 15 si 25 de grade. Temperatura perfecta.');
} else if (temperatura > 25) {
    console.log('Temperatura e mai mare de 25 de grade. Afara este cald');
} else {
    console.log('A aparut o eroare. Temperatura nu a putut fi afisata');
}


// 2) Conditionalul switch
let zi_saptamana = 'Miercuri';
switch (zi_saptamana) {
    case 'Luni':
        console.log('Prima zi a saptamanii. Mult succes la lucru!');
        break;
    case 'Marti':
        console.log('A doua zi a saptamanii. Astazi avem lectie!');
        break;
    case 'Miercuri':
        console.log('Mijlocul saptamanii.')
        break;
//...
    case 'Sambata':
    case 'Duminica':
        console.log('Zi de odihna');
        break;
    default:
        console.log('Variabila nu e o zi a saptamanii');

}
// break - este un cuvant rezervat care ii spune JS-ului sa iasa din structura de cod din care se afla
console.log(1)
console.log(2)
// 
console.log(100)

// CICLURILE ITERATIVE