import { cartsModel } from "../models/cartsModel.js";

export class CartsManagerMongo{
            constructor() {
                this.model = cartsModel;
            };
            //Aca creo el carrito
            async createCarts (productId) {
                try{
                    const cart = await this.model.create({ product: [{ productId, quantity: 1 }] });

                    return cart

                }catch(error){
                    console.log("createCarts",error.message);
                    throw new Error("No se pudo crear el carrito");

                };
                
            };

            //Aca obtengo el listado de carritos
            async getCarts () {
                try {

                    const carts = await this.model.find();

                    return carts

                }catch(error){
                    console.log("getCarts",error.message);
                    throw new Error("No se pudieron obtener el listado de carritos");

                };
            };

            //Aca agragmos productos al carrito
            async addProduct(cartId, productId) {
                try {
                    const cart = await this.model.findById(cartId);
                    if (!cart) {
                      throw new Error("Carrito no encontrado");
                    }
              
                    // Verifica si el producto ya existe en el carrito
                    const existingProduct = cart.product.find((item) => item.productId === productId);

                    if (existingProduct) {
                        // Incrementa la cantidad si el producto ya existe
                        existingProduct.quantity += quantity || 1; 
                    } else {
                        // Agrega un nuevo producto al carrito
                        cart.product.push({ productId, quantity: quantity || 1 });
                    }
                    await cart.save();
              
                    return cart;

                }catch(error){
                    console.log("addProduct",error.message);
                    throw new Error("No se pudieron agregar productos al carrito");

                };

            };


} 