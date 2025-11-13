import math from './math.mjs'


console.log(math.ariecerc(3));


// 1) Scope-ul global
// 2) Scope-ul functional
let dark_mode_button = document.querySelector('#dark_mode_button');

// Inainte de orice alte operatii, verificam daca deja exista un shopping cart in localStorage
let cartFromStorage = localStorage.getItem('cart');

let cart = {
}

// Daca da, il luam din storage, il procesam (JSON.parse()), il lipim obiectului cart, apoi actualizam DOM-ul pentru a vedea schimbarile pe pagina
if (cartFromStorage) {
    cart = JSON.parse(cartFromStorage)
    updateDOM()
}

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark_mode');
    dark_mode_button.textContent = 'Light Mode';
}

function darkMode() {

    if (document.body.classList.contains('dark_mode')) {

        localStorage.setItem('darkMode', 'false')
        // Setam light mode daca pagina e pe dark mode,  schimbam textul pentru a-i spune utilizatorului ca poate activa dark mode
        dark_mode_button.textContent = 'Dark Mode'
    } else {
        localStorage.setItem('darkMode', 'true')
        // Setam dark mode daca pagina e pe light mode, schimbam textul pentru a-i spune utilizatorului ca poate activa light mode
        dark_mode_button.textContent = 'Light Mode'
        
    }
    document.body.classList.toggle('dark_mode');
    
    // toggle - scoate clasa daca e prezenta
    //        - adauga clasa daca e absenta
}

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

function createProductCard(produs) {
    // Functie: 
    // Input: obiect produs cu proprietatile unui produs de pe pagina
    // Output: Cardul HTML pregatit pentru produsul respectiv


    // Crearea elementelor HTML in JS 
    let article = document.createElement('article')
    let h3 = document.createElement('h3')
    let img_card = document.createElement('img');
    let div_imagine = document.createElement('div');
    let h5 = document.createElement('h5')
    let button = document.createElement('button')

    // Adaugarea claselor pentru elemente
    article.classList.add('card')
    img_card.classList.add('img_card_style');
    div_imagine.classList.add("image_container");
    h5.classList.add('pret_produs')
    button.classList.add('buy_button')

    // Adaugarea continutului textual pentru elemente
    h3.textContent = produs.name
    button.textContent = 'Adauga in cos'
    h5.textContent = produs.price + " MDL"

    // Modificarea atributelor pentru elemente
    img_card.setAttribute('src', produs.image)
    img_card.setAttribute('alt', 'iphone')

    // Adaugam un eventListener la button
    button.addEventListener('click', () => {
        addProduct(produs.name, produs.price, produs.image)
    })

    // Asamblarea finala a cardului (in ordinea respectiva)
    div_imagine.insertAdjacentElement('afterbegin', img_card)
    article.insertAdjacentElement('beforeend', h3)
    article.insertAdjacentElement('beforeend', div_imagine)
    article.insertAdjacentElement('beforeend', h5)
    article.insertAdjacentElement('beforeend', button)


    // Dupa ce avem cardul asamblat, il intoarcem inapoi din functie
    return article

    
}

let container = document.querySelector('.container');
for (const produs of produse) {
   let card = createProductCard(produs)

   container.insertAdjacentElement('beforeend', card)
}

// Shopping Cart Functionality


// shopping cart - adaugam produse, modificam cantitatea produselor, stergem produsele, resetarea shopping cartului
// --------------------------------------------------------------------------------------
// Cream obiectul cart si il initializam ca fiind fara continut

// Cand dam cu mouseul peste shopping cart, apare un popup

let cartImage = document.querySelector('.shoppingCart img');
console.log(cartImage)

let cartContent = document.querySelector('.cartContent');
cartImage.addEventListener('mouseover', () => {
    cartContent.classList.add('cartContentVisible')

   
    let nav = document.querySelector('nav');

    cartContent.addEventListener('mouseleave', () => {
        cartContent.classList.remove('cartContentVisible')

    })
    nav.addEventListener('mouseleave', () => {
     cartContent.classList.remove('cartContentVisible')
    })
})



// "{cantitate:2, pret: 9999, nume: 'iPhone'}"
// --------------------------------------------------------------------------------------
// Adaugam un produs in cos sau ii modificam cantitatea cu o unitate in plus
function addProduct(product, price, image){
    // Verificam daca produsul este deja in cos
    if (cart[product] != null) {
        cart[product].quantity++;
    } else {
        cart[product] = {}
        cart[product].quantity = 1
        cart[product].price = price;
        cart[product].image = image
    }
    updateDOM()
}
// --------------------------------------------------------------------------------------
// Modificam cantitatea produsului cu o unitate in minus sau il stergem din cos
function deleteProduct(product) {
    // Verificam daca cantitatea produsului e mai mare de 1
    if (cart[product].quantity > 1) {
        cart[product].quantity--;
    } else {
        delete cart[product];
    }

    updateDOM()
}



// --------------------------------------------------------------------------------------
// Actualizam in DOM toate schimbarile pe care le-am facut in JS 
function updateDOM() {
    let cartList = document.querySelector('.cartContent');
    // Primul pas e stergerea continutului curent
    cartList.innerHTML = "";

    // Al doilea pas: Iteram prin obiectele noastre si pentru fiecare obiect, cream un <li> pe care
    // il vom pune in cartList (redesenam DOM-ul)


    // Cream o variabila totalPrice pentru a calcula pretul total al produselor
    let totalPrice = 0;

    // Iteram prin obiectul cart
    for (let product in cart) {

        // Cream li
        let listItem = document.createElement('li');
        listItem.classList.add('shoppingCartElement')

        // Cream imaginea pentru produs
        let productImage = document.createElement('img')
        productImage.setAttribute('src', cart[product].image)
        productImage.classList.add('cartElementImage')

        // Populam li cu continut
        listItem.textContent = product + ": " + cart[product].quantity + " unitati";

        // Calculam pretul total al unitatilor pentru produsul respectiv
        let totalProductPrice = cart[product].price * cart[product].quantity;

        // Apoi il lipim la lista noastra
        listItem.textContent += ". " + totalProductPrice + " lei. "

        // Cream un buton pentru a scoate o unitate din cantitatea produsului
        let removeButton = document.createElement('button');
        // Adaugam continut textual butonului
        removeButton.textContent = 'Sterge Unitate';

        // Adaugam event listener care, cand detecteaza un click, apeleaza functia transmisa ca parametru care apeleaza functia deleteProduct (cu parametrul produs).
        removeButton.addEventListener('click', () => {
            // Cand butonul e apasat, stergem produsul
            deleteProduct(product)
        })

        listItem.insertAdjacentElement('beforeend', productImage)
        // Adaugam butonul in list item
        listItem.insertAdjacentElement('beforeend', removeButton);

        // Adaugam list itemul in elementul cart
        cartList.insertAdjacentElement('beforeend', listItem)

        // La pretul total al TUTUROR produselor adaugam pretul total pentru produsul curent
        totalPrice += totalProductPrice
    }

    // Dupa ce avem pretul total pentru toate produsele, il inseram intr-un element din pagina
    let price = document.querySelector(".price");
    price.textContent = "Pret total: " + totalPrice + " lei.";

    // Ne asiguram ca shopping cart-ul este salvat in pagina
    // JSON.stringify() - preia un obiect/lista, o transforma intr-un string de format JSON.
    localStorage.setItem('cart', JSON.stringify(cart))
}

// let test = '345'
// function parinte() {
//     // 2) Function Scope
//     // let test = '123';
//     // 2.1) Closures
//     function copil() {
//         // let test = '678'
//         console.log(test);
//     }

//     copil()
// }

// 3) Block sope

// if (2 == 2) {
//     let exemplu = '123';
// }
// console.log(exemplu);


try {
    parinte();
} catch (eroare) {
    console.error(eroare);
}

// HTTP Requests

// HyperText Transfer Protocol

// 1) GET - actiune prin care noi cerem date de la server
// 2) POST - actiune prin care noi trimitem date pe server
// -----
// 3) PUT - actiune prin care noi trimite date pe server SAU le actualizam daca ele deja exista
//      3.1) PATCH

// 4) DELETE




// Clientul transmite un request (browserul), serverul transmite un raspuns

// Un request HTTP are urmatoarele parti:
// 1) Metoda requestului
// 2) Unde transmitem requestul (endpoint) (server/incarca_produse)
                                          // (server/incarca_categorii)
// 3) Body - continutul requestului
// ---------------
// 4) Metadata - informatie despre request

// 2 tipuri de date pe server:
// - vrem sa incarcam PRODUSE
// - vrem sa incarcam categorii pentru PRODUSE


// 404 - Not found

// 100-199 - coduri informationale
// 200-299 - coduri succes (requestul a fost transmis, raspunsul a venit cu success)
// 300-399 - redirect
// 400-499 - Eroare de partea clientului (404)
// 500-599 - Eroare de partea serverului (500 - Internal Server Error)



// Single-threaded


// console.clear()

console.log('Inainte de setTimeout')

// setTimeout(function() {
//     console.log('Timeout message')
// }, 5000)

console.log('Dupa setTimeout')

// 1) Verifica ce trebuie de executat acum (in cod) (call stack)
// 2) Verifica ce cod trebuie lasat pe mai tarziu (asincron) (catre WebAPIs)
// 3) Verifica ce cod din cel lasat pe mai tarziu trebuie acum de executat (Callback queue)
// ----------------------------------------------------------------------------

// Implementari pentru codul asincron:
// 1) Callbackuri
// 2) Promisiunile
// 3) Async/Await


// ---------------------------------------------------------------

// 1) callback - call me back - suna-ma inapoi

function loadPage() {

}
//     cafeneaua                  nr. de telefon
window.addEventListener('scroll', loadPage)



// Functie care insereaza o imagine in pagina si ii aplica niste transformari
function rotate(img) {
    img.style.transform = 'rotate(45deg)'
    console.log('Inside function')
}

function translate(img) {
    img.style.transform = 'translate(100px,100px)'
    console.log('Inside function')
}

function scale(img) {
    img.style.transform = 'scale(1.5)'
    console.log('Inside function')
}


function insertImage(imgSrc, transformare) {
    let img = document.createElement('img')
    img.setAttribute('src', imgSrc);
    img.style.width = '200px'
    
    document.body.insertAdjacentElement('beforeend', img);
}

// console.clear()

console.log('Before')
insertImage('/media/iphone.webp',  scale)


console.log('After')

addEventListener('click', () => {

})
// console.clear()
// PROMISIUNI

// Pending

// Fulfilled
// Rejected

// request
// Functia fetch va intoarce inapoi o promisiune
// .then(functie) - specificam ce facem daca promisiune a fost indeplinita
// .catch(functie) - specificam ce facem daca promisiune NU a fost indeplinita
// .finally(functie) - specificam ce facem la final, indiferent daca promisiunea a fost sau nu indeplinita

// fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(result => result.json())
//             .then(dateJson => consol.log(dateJson))
//             .catch(eroare => console.error('A aparut o eroare: ' + eroare))
//             .finally(/* fie o actiune care nu e legata atat de mult de precedentele
//                         sau o actiune de cleanup*/ )

// console.log('After promise')


// setTimeout(()=>{
//     console.log('After timeout')
// },5000)


// getUserDetails()
//     .then(user => getUserCart(user.id))
//     .then(cart => getProductPrices(cart))
//     .then(price => checkout(price))
//     .then(result => console.log('Am calculat pretul final al produselor'))
//     .catch(error => 'A aparut o eroare, ' + error)

    
// Cream o promisiune simpla
// function getLater() {
//     return new Promise((resolve) => {
//         setTimeout(() => reolve('promisiunea a fost indeplinita'), 1000)
//     });
// }

// getLater()
//     .then(valoare => console.log(valoare))
//     .catch(eroare => console.error(eroare))
//     .finally(() => console.log('Am terminat promisiunea'))



// console.log('test')

// setTimeout(() => {
//     console.log('Hello')
// }, 4000)

console.clear()
// try-catch-finally

// try {
    
// } catch(eroare) {
//     console.error(eroare)
// } finally {





// let okey = (ms, mesaj) => new Promise(resolve => setTimeout(() => {
//     resolve(mesaj)
// }, ms))

// let p1 = okey(20000, 'Promisunea 1')
// let p2 = okey(5000, 'Promisiunea 2')
// let p3 = okey(8000, 'Promisiunea 3')

// AND pentru promisiuni
// Promise.all([p1, p2])
//         .then(([a,b]) => console.log('Ambele promisiuni au fost indeplinite', a,b))

/***/Promise.allSettled([]) // pe langa functionalitatea la Promise.all(), veti primi un raport cu fiecare rezultat pentru fiecare promisiune


// OR pentru promisiuni
// Va folosi primul rezultat succes care vine inapoi, ignora toate esecurile (cu exceptia cazului in care toate dau esec)
// Promise.any([p1, p2, p3])
//     .then(resultat => console.log('Primul succes:', resultat))

/***/Promise.race([]) // Va folosi primul rezultat care vine inapoi, indiferent daca e success sau esec


// ASYNC/AWAIT

// Async - un cuvant cheie care specifica ca o functie intoarce o Promisiune
// Await - opreste executia functiei (pune pauza la functie) pana cand Promisiune e indeplinita
// (Nu oprim executia paginii, doar executia functiei)


// Promisiuni vs async/await


// 1. Promisiuni
fetch('https://jsonplaceholder.typicode.com/users')
    .then(raspunsul => raspunsul.json())
    .then(utilizatori => console.log(utilizatori))
    .catch(eroare => console.log(eroare))
    .finally()

// 2. Async/Await 
async function loadUsers() {
    try {
        let raspuns = await fetch('https://jsonplaceholder.typicode.com/users')
        let utilizatori = await raspuns.json()
        console.log(utilizatori)
    } catch(eroare) {
        console.error(eroare)
    } finally {

    }
    
}

loadUsers()


async function loadData(url) {
    let raspuns = await fetch(url);
    let date = await raspuns.json()
    console.log(date)
}

// loadData('https://jsonplaceholder.typicode.com/comments')
//         .then(date => console.log(date))


loadData('https://jsonplaceholder.typicode.com/comments')


loadData('https://jsonplaceholder.typicode.com/albums')



async function loadBoth() {
    let p1 = fetch('/adresa1')
    let p2 = fetch('/adresa2')

    let [raspuns1, raspuns2] = await Promise.all([p1,p2])

}

// FETCH pentru POST (celelalte fetch de mai sus sunt, by default, requesturi GET)
fetch('adresa unde dorim sa incarcam datele', 
    // Obiect parametru
    {
    // 1. Metoda
    method: "POST",
    // 2. Headers (informatie despre request)
    headers: {
        'Content-Type': "application/json"
    },
    // 3. Corptul requestului (continutul pe care il transmitem)
    body: JSON.stringify({
        name:'Alexandru',
        lectie:22,
    })
})

// La fel lucreaza pentru PUT/PATCH


// Pentru DELETE

fetch('adresa unde dorim sa incarcam datele', {method: "DELETE"})
