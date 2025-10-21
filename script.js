console.log(document.body);

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

let title_shop = document.querySelector('#title_shop');

// Modificarea continutului


// Modificarea textului
title_shop.textContent = 'Bine ati revenit la magazinul nostru online!';

// Modifcarea HTML
let example_paragraph = document.querySelector('#example_paragraph');
example_paragraph.innerHTML = 'Lorem ipsum dolor <b>sit amet</b> <i>consectetur</i>, adipisicing elit. Illo fugiat numquam sed pariatur cum dolores officiis perferendis, magni, repellat quaerat itaque, eaque deleniti molestiae magnam iste! Laboriosam illo earum quisquam.'


// Modificarea atributelor

let img_casti = document.querySelector('#img_casti');

// Vizualizarea atributelor
console.log(img_casti.getAttribute('src'))

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

let dark_mode_button = document.querySelector('#dark_mode_button');
function darkMode() {
    if (document.body.classList.contains('dark_mode')) {
        dark_mode_button.textContent = 'Dark Mode'
    } else {
        dark_mode_button.textContent = 'Light Mode'
    }
    document.body.classList.toggle('dark_mode');
    
    // toggle - scoate clasa daca e prezenta
    //        - adauga clasa daca e absenta
}

