// shopping cart - adaugam produse, modificam cantitatea produselor, stergem produsele, resetarea shopping cartului
// --------------------------------------------------------------------------------------
// Cream obiectul cart si il initializam ca fiind fara continut
let cart = {
}

// Inainte de orice alte operatii, verificam daca deja exista un shopping cart in localStorage
let cartFromStorage = localStorage.getItem('cart');

// Daca da, il luam din storage, il procesam (JSON.parse()), il lipim obiectului cart, apoi actualizam DOM-ul pentru a vedea schimbarile pe pagina
if (cartFromStorage) {
    cart = JSON.parse(cartFromStorage)
    updateDOM()
}
// "{cantitate:2, pret: 9999, nume: 'iPhone'}"
// --------------------------------------------------------------------------------------
// Adaugam un produs in cos sau ii modificam cantitatea cu o unitate in plus
function addProduct(product, price){
    // Verificam daca produsul este deja in cos
    if (cart[product] != null) {
        cart[product].quantity++;
    } else {
        cart[product] = {}
        cart[product].quantity = 1
        cart[product].price = price;
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
    let cartList = document.querySelector('.shoppingCart');
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


function resetCart() {
    cart = {}

    updateDOM();
}


// deleteProduct // referinta catre functie (ii transmitem unei alte functii deleteProduct pentru o apelare in viitor)

// deleteProduct() // apelul functiei - apelam functia in momentul in care citim codul


// products = [
//     {
//         name: 'iPhone',
//         price: 13999
//     },
//     {
//         name: 'Laptop',
//         price: 13999
//     },
//     {
//         name: 'Casti',
//         price: 13999
//     }
// ]