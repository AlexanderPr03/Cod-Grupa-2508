// shopping cart - adaugam produse, modificam cantitatea produselor, stergem produsele, resetarea shopping cartului

cart = {}
let cartFromStorage = localStorage.getItem('cart');

if (cartFromStorage) {
    cart = JSON.parse(cartFromStorage)
    
}
updateDOM()

/*
cart = {
    iphone : {
        quantity:
        price:
    },
    laptop :{
        quantity:,
        price:
    },
    casti : {
        quantity:,
        price::
    }
}
*/

// cart.product 
// cart[product]



// obiect[proprietate]
// product va fi un string, numele produsului
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
    console.log(cart);
}

// function changeQuantity(product, quantity) {

// }

function deleteProduct(product) {
    // Verificam daca cantitatea produsului e mai mare de 1
    if (cart[product].quantity > 1) {
        cart[product].quantity--;
    } else {
        delete cart[product];
    }

    updateDOM()
}


function updateDOM() {
    let cartList = document.querySelector('.shoppingCart');
    // Primul pas e stergerea continutului curent
    cartList.innerHTML = "";

    // Al doilea pas: Iteram prin obiectele noastre si pentru fiecare obiect, cream un <li> pe care
    // il vom pune in cartList

    let totalPrice = 0;

    for (let product in cart) {
        let listItem = document.createElement('li');
        listItem.textContent = product + ": " + cart[product].quantity + " unitati";


        let totalProductPrice = cart[product].price * cart[product].quantity;
        listItem.textContent += ". " + totalProductPrice + " lei. "
        // Cream un buton pentru a scoate o unitate din cantitatea produsului
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Sterge Unitate';

        // Adaugam event listener care, cand detecteaza un click, apeleaza functia transmisa ca parametru care apeleaza functia deleteProduct (cu parametrul produs).
        removeButton.addEventListener('click', () => {
            deleteProduct(product)
        })

        
        // Folosim atributul onlick
        // removeButton.onclick =  () => {
        //     deleteProduct(produs)
        // }

        listItem.insertAdjacentElement('beforeend', removeButton);
        cartList.insertAdjacentElement('beforeend', listItem)

        totalPrice += totalProductPrice
    }

    let price = document.querySelector(".price");
    price.textContent = "Pret total: " + totalPrice + " lei.";

    // JSON.stringify() - preia un obiect/lista, o transforma intr-un string de format JSON.
    localStorage.setItem('cart', JSON.stringify(cart))
}


function resetCart() {
    cart = {}

    updateDOM();
}
deleteProduct // referinta catre functie (ii transmitem unei alte functii deleteProduct pentru o apelare in viitor)

deleteProduct() // apelul functiei - apelam functia in momentul in care citim codul


products = [
    {
        name: 'iPhone',
        price: 13999
    },
    {
        name: 'Laptop',
        price: 13999
    },
    {
        name: 'Casti',
        price: 13999
    }
]