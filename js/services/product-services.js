const productList = () => {
    return fetch("https://fake-api-alurageek-git-main-daniel-hormazabals-projects.vercel.app/products")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const createProducts = (name, price, image, ) => {
    return fetch("https://fake-api-alurageek-git-main-daniel-hormazabals-projects.vercel.app/products",{
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            image,
        })
    }).then ((res) => res.json())
      .catch((err) => console.log(err));

};

const deleteProduct = (id) => {
    return fetch(`https://fake-api-alurageek-git-main-daniel-hormazabals-projects.vercel.app/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export const servicesProducts = {
    productList, createProducts, deleteProduct,
}