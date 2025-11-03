// shopping cart - adaugam produse, modificam cantitatea produselor, stergem produsele

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


cart = {}
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

    for (let produs in cart) {
        let listItem = document.createElement('li');
        listItem.textContent = produs + ": " + cart[produs].quantity + " unitati";
        
        cartList.insertAdjacentElement('beforeend', listItem)
    }

}

"iphone".quantity;
