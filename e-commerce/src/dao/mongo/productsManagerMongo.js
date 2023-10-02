import mongoose  from "mongoose";

import { productsModel } from "./models/productsModel.js";

export class ProductsManagerMongo{
    constructor(){
        this.model = productsModel;
    };

    async createProduct(productInfo){
        try {
            const product = await this.model.create(productInfo);
            return product;
        } catch (error) {
            console.log("createProduct",error.message);
            throw new Error("No se pudo crear el producto");
        }
    };

    async getProducts(){
        try {
            const products = await this.model.find();
            return products;
        } catch (error) {
            console.log("getProducts",error.message);
            throw new Error("No se pudo obtener el listado de productos");
        }
    };

    async getProductById(productId){
        try {
            const product = await this.model.findById(productId);
            return product;
        } catch (error) {
            console.log("getProductById",error.message);
            throw new Error("No se pudo obtener el producto");
        }
    };

    async updateProduct(productId, newProductInfo){
        try {
            const product = await this.model.findByIdAndUpdate((productId),newProductInfo,{new:true});
            if(!product){
                throw new Error("No se pudo encontrar el producto a actualizar");
            }
            return product;
        } catch (error) {
            console.log("updateProduct",error.message);
            throw new Error("No se pudo actualizar el producto");
        }
    };

    async deleteProduct(productId){
        try {
            const product = await this.model.findByIdAndDelete(productId);
            if(!product){
                throw new Error("No se pudo encontrar el producto a eliminar");
            }
            return product;
        } catch (error) {
            console.log("deleteProduct",error.message);
            throw new Error("No se pudo eliminar el producto");
        }
    };
};