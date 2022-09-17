//using funtion to get API data.
let getdata =async ()=>{
    try{
        const data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
        const products = await data.json();
        products.forEach((product)=>{
            displaydata(product)
        });
    } catch(error){
            console.log(`error`)
    }
}

getdata();

displaydata =async (product)=>{
document.getElementById("cards").innerHTML+= `
<div class="card">
<p class="brand"><b>${product.brand}</b></p>
<h1 class="name">${product.name}</p>
<img src="${product.image_link}" alt="image" class="image"><br>
<a href="${product.product_link}" target="_blank">productlink</a>
<p class="description">${product.description}</p>
<p class="price">${product.price_sign}${product.price}</p>
</div>
`
}