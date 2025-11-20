let user1 = {}


let user2 = {}
// JS     -    Analogia din viata reala
// Class - fabrica de obiecte
// Object (user1, user2, car) - obiectul creat de fabrica
// Properties - tot ceea ce putem schimba la obiecte

class Car {
    constructor(culoare, brand) {
        this.culoare = culoare,
        this.brand = brand
    }
}

let car1 = new Car('red', 'Toyota')
let car2 = new Car('blue', 'Dacia')
console.log(car2)

// let car1 = {
//     culoare: 'red',
//     brand: 'Toyota',
//     run() {
//         this.speed = '50';
//     }
// }


// 1) Encapsulare
class User {
    constructor(username, email, password) {
        this.username = username,
        this.email = email,
        this.password = password
    }

    login() {
        console.log('Utilizatorul se autentifica')
    }
}


// 2) Abstractizare - interactionam cu functii simple care se ocupa de logica complexa pe fundal

class AparatCafea {

    prepara_cafea() {

        this.temperatura_apei()
        this.presiunea_apei()

        console.log('Cafeaua este servita')

    }

    // ---------------------------------------------------
    temperatura_apei() {
        // ... termodinamica legata de incalzirea apei, etc
    }

    presiunea_apei() {
        // mecanica, fizica
    }
}



console.log('')



// 3) Inheritance (Mostenire)
class DomesticAnimal {
    constructor(name, health) {
        // proprietati si functii comune
    }
}


class Dog extends DomesticAnimal {
    // proprietati specifice cainilor
}


class Cat extends DomesticAnimal{
    // ... proprietati specifice pisicilor
}





class User {

}


class Admin extends User {
    // ...
}

class Editor extends User {
    // ...
}

class Customer extends User {
    // ...
}


// 4) Polimorfism - putem avea o functie cu un nume, dar clase diferite sa o execute diferit



class Boxa {
    play_music() {
        console.log('Boxa incepe sa vibreze')
    }
}

class DVDPlayer {
    play_music() {
        console.log('DVD-ul se invarte')
    }
}