
// if - daca
// else - in caz contrar

// if ((username === usernameServer || telefonUser === telefonServer || emailUser === emailServer) 
//             && (parolaDeLaUser === parolaDePeServer)) {
//     console.log('Utilizatorul este autentificat!');
//     // trimiteti requestul pe server
//     // asteptati raspunsul
//     // procesati raspunsul
//     // etc
// } else {
//     console.log('Parola sau loginul sunt incorecte!')
// }


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

// Cicluri iterative unde nr. de iteratii e definit


// 1) Ciclul for (pentru)
// 1.1) Valoarea initiala
// 1.2) Conditia
// 1.3) Pasul iterativ (iteratia)
for (let i = 1; i<=100; i+=4) {
    console.log(i);
}

for (let i = 100; i>0; i--) {
    console.log(i);
}

console.clear();

let prenume = 'Alexandru';
console.log(prenume.length);

for (let i = 0; i<prenume.length; i++) {
    console.log(prenume[i]);
}



// Operatorii aritmetici simplificati
// i = i + 2;
// i += 2
// i += 1;  /* <==> */ 

// i++; // Adaugam o unitate din numarul i
// i--; // Scoatem o unitate din numarul i



// Cicluri iterative unde nr. de iteratii este necunoscut din prealabil
// Ciclul iterativ While - Cat timp

// alert('Alerta JavaScript!') - afiseaza o alerta
// let parolaPrompt = prompt('Introdu o parola');    // afiseaza o alerta + un input box


// Ciclul while de mai jos va repeta promptul pentru utilizator (si atribuirea la variabila parolaPrompt) pana cand conditia va fi falsa (in alte cuvinte, pana parolaPrompt va fi egala cu 'qwerty')
// while (parolaPrompt != 'qwerty') {
//     parolaPrompt = prompt('Parola gresita. Introdu o parola');  
// }

// Ciclul do-while

// let f = 1000000

// do {
//     console.log(f);
// } while (i<=10)
// let parolaPrompt;
// do {
//     parolaPrompt = prompt('Introdu o parola');
// } while (parolaPrompt != 'qwerty')

// TIPURILE DE DATE COMPLEXE

// 1) Obiect

// Definitia unui obiect
let masina = {
    // Proprietati ale unui obiect
    culoare: 'rosu',
    scaune: 4,
    cutie_automata: true,
    motor: {
        cilindri: 4,
        volum: 2
    }
}

// console.log(masina);


// dot notation - notatia punct
console.log(masina.motor.volum);

// Adaugarea/modificarea unei proprietati
// masina.motor = '1l';

// Stergerea unei proprietat
delete masina.culoare;

// console.log(masina)
// Document Object Model (DOM)
let articol = {
    title: 'Cameră de supraveghere IMILAB IMILAB A1 3 MP White',
    image: 'media/camera.png',
    pret: 1999,
    categorii: ['gadgets', 'camere', 'media', 'securitate']
}

// Ciclul for adaptat pentru obiecte:
// Ciclul for-in
for (const proprietate in articol) {
    console.log(proprietate)
}

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
// }

// Consola reprezinta de asemenea un obiect
console.log(console);

console.clear();

// LISTA (Array, Vector)
let nume1 = 'Ion'
let nume2 = 'Maria'
let nume3 = 'Vlad'

let nume = ['Ion', 'Maria', 'Vlad']

// 
console.log(nume[3])

// Metode ce pot fi aplicate unei liste

// Adaugam un element la capatul unei liste
nume.push('Alexandru')
// Adaugam un element la inceputul unei liste
nume.unshift('Victor')


// Scoatem un element de la capatul listei
// nume.pop()



// console.log(nume)


// for (let i=0; i<nume.length; i++) {
//     console.log('Bine ai revenit, ' + nume[i]);
// }

// Ciclul for-of

// Listele sunt un caz aparte al obiectelor in care numele proprietatilor reprezinta numere consecutive (incepand de la 0)
console.log(nume);

for (const element of nume) {
    console.log(element)
}

// JSON - JavaScript Object Notation


let produse = [
    {
        name: 'Apple iPhone 13 128 GB',
        image:'media/iphone.webp',
        price: 9999
    },
    {
        name: 'Cameră de supraveghere IMILAB IMILAB A1 3 MP White',
        image:'media/camera.png',
        price: 1999 
    },
    {
        name: 'Laptop Lenovo IdeaPad Gaming 3 15ACH6-8URK Shadow Black',
        image:'media/laptop.png',
        price: 13990 
    },
    {
        name: 'Consolă pentru jocuri Microsoft Xbox Series S White',
        image:'media/consola.png',
        price: 5999
    },
    {
        name: 'Boxă portabilă Marshall Emberton Black',
        image:'media/boxa.png',
        price: 2999
    },
    {
        name: 'Căști Apple AirPods PRO (2nd generation) MagSafe White',
        image:'media/casti.png',
        price: 4999
    },
]


for (const produs of produse) {
    console.log(produs);
}

// Functie - functiile sunt definite de catre noi (utilizator)
// Metoda - predefinite in JavaScript

// function loginUser() {


// }


function greetUser(nume) {
    console.log('Hello ' + nume)
}

for (const name of nume) {
    greetUser(name)
}

// greetUser('Victor')