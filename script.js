// let prenume = 'Alexandru'

// let activitate = 'Mentor Frontend Development'

// console.log(prenume)
// console.log(activitate)

// let persoana = prenume + ' - ' + activitate;
// console.log(persoana)

// let a = 5
// let b = 2
// console.log(a + b)

// DOM - Document Object Model


// One line comments 

/*

Multi-line comments

*/


// TIPURILE DE DATE ELEMENTARE IN JAVASCRIPT


// 1) Sirurile de caractere - String


let prenume = "Alexandru"
let nume  = 'Prohnitchi'

// console.log(prenume.toUpperCase()) Fiecare tip de date are anumite functii care pot fi apelate pentru a manipula valorile de acest tip de date intr-un anumit mod (de ex., luam un string si il facem sa fie scris tot cu litere majuscule)


// 2) Numerele - Number - si numerele intregi si nr. reale sunt definite de tipul de date Number

// let nr1 = '7'
// let nr2 = 7

let a = 5
let b = 7

console.log(b + a)
console.log(a - b)
console.log(a * b)
console.log(a / b)


// 3) Boolean - intrerupator, adevarat sau false (true or false)

let passwordMatches = true


// True - 1
// False - 0

// 4) Null - tip de date care reprezinta lipsa unei valori in variabila

let emptyVariable = null;


// 5) Undefined - tip de date care reprezinta lipsa variabilei (cel mai des intalnit ca mesaj de eroare)

// undefined

// Cuvantul typeof - cuvant rezervat care ne permite sa vedem tipul de date al unei variabile

console.log(typeof prenume)


prenume = 'Ion'
console.log(prenume)


// const - defineste o constanta - o variabila a carei valoare, odata definita, nu mai poate fi modificata.
// Practica este ca numele consantelor sa fie scris cu majuscule
const API_KEY = '1231312n22aw9anwa9dnqw9dqwnd912n19d129d1';

// API_KEY = 'dada'


console.log('test')


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

console.log()