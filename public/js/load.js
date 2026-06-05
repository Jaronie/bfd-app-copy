loadProducts();

async function loadProducts() {
    const url = "http://localhost:8001/api/products";
    const config = {
        method: "get"
    }
    const response = await fetch(url, config);
    if(response.ok){
        //converts response body to JSON etxt
        const products = await response.json();
        console.log("API connected, data received");

        //make call to display product cards here

    }
}

function showProducts(mons) {
    for(let product of mons){
        //...
    }
}