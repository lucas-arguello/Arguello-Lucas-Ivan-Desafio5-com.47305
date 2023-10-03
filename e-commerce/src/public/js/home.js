// //Ahora creamos el "socket" del lado del cliente
// const socketClient = io();

// //Obtenemos los elementos a manipular en el HTML por medio de su "id".
// const productList = document.getElementById("productList")


// socketClient.on("productsArray", (dataProdcuts) => {
//     //console.log(dataProdcuts);
//     let productsElems= "";
//     //Iteramos en el array de productos creamos una lista.
//     dataProdcuts.forEach(prod =>{ 
//         productsElems+= 
//         ` <li>
//             <p>Nombre : ${prod.title}</p>
            
//         </li> `;
//             //console.log(productsElems);
            
//             });
//             //inserto la lista de productos en el HTML de "realtime.hbs"      
//             productList.innerHTML= productsElems;
//         });

// const socketClient = io();

// // Función para renderizar la vista de Handlebars con los datos de productos
// function renderProducts(products) {
//     const template = document.getElementById("product-template").innerHTML;
//     const compiledTemplate = Handlebars.compile(template);
//     const productHTML = compiledTemplate({ products });
//     document.getElementById("productList").innerHTML = productHTML;
// }

// socketClient.on("productsArray", (dataProdcuts) => {
//     renderProducts(dataProdcuts);
// });