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
