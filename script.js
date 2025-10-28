let dark_mode_button = document.querySelector('#dark_mode_button');

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark_mode');
    dark_mode_button.textContent = 'Light Mode';
}

// 1) Preluarea elementelor din HTML/CSS
// 2) Editarea elementelor
// 3) Crearea elementelor si inserarea lor in HTML/CSS
// 4) Stergerea elementelor

// DOM - Document Object Model - Interfata in JS care ne permite sa interactionam cu HTML-ul.
// In JS codul de HTML e reprezentat sub forma de obiect (document)

// 1) PRELUAREA ELEMENTELOR

// 1.1) Preluarea dupa id
// 1.2) Dupa clasa
// 1.3) Dupa tag

let meniu = document.getElementById('menu_list');
console.log(meniu)


let carduri = document.getElementsByClassName('card');
console.log(carduri)


let articole = document.getElementsByTagName('article')
console.log(articole)



// -----------------------------------------


console.log(document.querySelector('#menu_list')); // Primul element
console.log(document.querySelectorAll('.card'));   // Toate elementele

// let title_shop = document.querySelector('#title_shop');

// Modificarea continutului


// Modificarea textului
// title_shop.textContent = 'Bine ati revenit la magazinul nostru online!';

// Modifcarea HTML
let example_paragraph = document.querySelector('#example_paragraph');
// example_paragraph.innerHTML = 'Lorem ipsum dolor <b>sit amet</b> <i>consectetur</i>, adipisicing elit. Illo fugiat numquam sed pariatur cum dolores officiis perferendis, magni, repellat quaerat itaque, eaque deleniti molestiae magnam iste! Laboriosam illo earum quisquam.'


// Modificarea atributelor

// let img_casti = document.querySelector('#img_casti');

// Vizualizarea atributelor
// console.log(img_casti.getAttribute('src'))

// Modifcarea atributelor


function changeImage() {
    img_casti.setAttribute('src', 'media/iphone.webp');
}

// img_casti.toggleAttribute('atribut') - porneste sau opreste un atribut
// img_casti.removeAttribute('atribut') - sterge un atribut

// Modificarea stilurilor

let change_image_button = document.querySelector('#change_image_button');
// Modificarea directa a stilurilor (cu exceptia cazurilor in care avem max 1-2 stiluri de modificat)
// change_image_button.style.borderRadius = '12px';
// change_image_button.style.padding = " 10px 20px 10px 20px"
// change_image_button.style.border = 'none';
// change_image_button.style.color = 'white'
// change_image_button.style.backgroundColor = 'black'
// change_image_button.style.cursor = 'pointer'

// Modificarea stilurilor prin intermediul claselor definite in CSS
// Adaugarea unei clase
change_image_button.classList.add('change_image_button');
// Stergerea unei clase
change_image_button.classList.remove('change_image_button');

// toggle


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

console.clear()
// INSERAREA ELEMENTELOR IN HTML:

// 1) cream si populam elementul in JS


// 2) inseram elementul populat cu continut in HTML

// cream o ancora pentru ca in jurul acesteia sa inseram elementul
// let sectiune = document.querySelector('.example_insert')

// insertAdjacentElement - 4 pozitii fata de ancora unde putem insera elementul din JS
// sectiune.insertAdjacentElement('beforebegin', img_card);
// sectiune.insertAdjacentElement('afterbegin', img_card);
// sectiune.insertAdjacentElement('beforeend', img_card);
// sectiune.insertAdjacentElement('afterend', img_card);

/*
<article class="card">
    <h3>Apple iPhone 13 128 GB</h3>
    <div class="image_container">
        <img class="img_card" src="media/iphone.webp">
    </div>
    <h5 class="pret_produs">9999 MDL</h5>
    <button class="buy_button">Adauga in cos</button>
</article>

*/

// Crearea unui card:
console.clear();

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



// STORAGE


// localStorage - 10MB

// Setarea unei valori in localStorage
// localStorage.setItem('limba', 'engleza')

// Preluarea unei valori din localStorage
// console.log(localStorage.getItem('limba'))

// Stergerea unei valori
// localStorage.removeItem('limba');

// Stergeti intreg localStorage
// localStorage.clear();



// sessionStorage - 5MB


// sessionStorage.setItem('temporar', 'Alexandru')
// sessionStorage.getItem()
// sessionStorage.removeItem()
// sessionStorage.clear()


document.cookie = "yummy_cookie=chocolate";



// Functie clasica
function greetUser(nume) {
    return 'Hello ' + nume;
}

// Arrow functions - functii sageata

let greetUser2 = (nume) => 'Hello ' + nume

console.log(greetUser('Alexandru'))
console.log(greetUser2('Alexandru'))

// EVENIMENTE
let card = document.querySelector('.card');

                                //Functie anonima
card.addEventListener('click', function() {
    
})

let contact_email = document.querySelector('.message_box');
let text_email = document.querySelector('#text_email');



// change - detecta schimbari la un checkbox



// mouseenter, mousemove, mouseleave
// mouseup, mousedown - apasam pe butonul de pe mouse si cand nu mai apasam pe butonul de pe mouse

contact_email.addEventListener('input', () => text_email.textContent = contact_email.value.length + " caractere")

let mouse_info = document.querySelector('#mouse_info');
let menu = document.querySelector('.meniu')
window.addEventListener('mousemove', (event) => {
    mouse_info.textContent = "X: " + event.x + " Y: " + event.y

    if (event.x < 20) {
        menu.classList.add('meniu_activ')
    }
    if (event.x > 300) {
        menu.classList.remove('meniu_activ')
    }
})


let form_contact = document.querySelector('.form_contact');

form_contact.addEventListener('submit', (event) => {
    event.preventDefault();

    // ...transmitem datele

    
})  