import { servicesProducts } from "../services/product-services.js";

const containerProductos = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");
const clearButton = document.getElementById('button_reset');

function createCard(name, price, image, id){
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML =  `
    <div class="img_contenedor">
        <img src="${image}" alt="${name}" class="producto_img">
    </div>
    <div class="card_contenedor_info">
        <p class="producto_name">${name}</p>
        <div class="valor_producto">
             <p class="producto_precio">${price}</p> 
            <button class="delete_button" data-id="${id}"></button>
            <i class="fa-solid fa-trash" style="color: #f2f2f2;"></i>
        </div>
    </div>
    
    `;
    containerProductos.appendChild(card);
    return card;
}
const deleteProductHandler = (event) => {
    const productId = event.target.dataset.id;
    servicesProducts.deleteProduct(productId)
        .then(() => {
            event.target.closest('.card').remove();
        })
        .catch((err) => console.error(err));
};
const render = async () =>{
    try{
        const listProducts = await servicesProducts.productList();
            listProducts.forEach(products => {
                containerProductos.appendChild(
                    createCard(
                        products.name, 
                        products.price, 
                        products.image, 
                        products.id
                    )
                )
            });
    }
    catch(error){
        console.log(error);
    }
};
const clear = () => {
    console.log('Formulario limpiado');
};

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;
    
    console.log(name);
    console.log(price);
    console.log(image);
    
    servicesProducts.createProducts(name, price, image)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    
});
containerProductos.addEventListener("click", deleteProductHandler);
clearButton.addEventListener('click', clear);

render();