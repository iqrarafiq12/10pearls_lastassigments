let id = getQueryVariable("id");
let product = products.filter(p => p.id == id)[0];

let img = document.getElementById("product-detail-img");
let h1Name = document.getElementById("product-detail-name");
let spanPrice = document.getElementById("product-detail-price");
let pDescription = document.getElementById("product-detail-description");

img.src = product.img;
h1Name.innerHTML = product.name;
spanPrice.innerHTML = "$" + product.price;
pDescription.innerHTML = product.description;

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}