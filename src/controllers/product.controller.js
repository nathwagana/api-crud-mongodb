const productModel = require('../models/product.model');
const mongoService = require('../services/mongo.service');

/*
Próxima tarefa: adicionar autenticação -> Basic Auth
Authorization: Basic dGhpYWdvOnRoaWFnb0AxMjM=
*/

exports.listAll = async (request, response) => {
    try {
        const products = await mongoService.get({}, productModel);

        if (!products.length) {
            return response
                .status(204)
                .send({ message: 'No products to return' });
        };

        return response
            .status(200)
            .send({ products });

    } catch(err) {
        return response
            .status(500)
            .send({error: 'Internal error when loading products'});
    }
};

exports.getById = async (request, response) => {
    try {
        const { id } = request.params;
        const product = await mongoService.getById(id, productModel);
        
        if (!product) {
            return response
                .status(404)
                .send({ message: 'Product Not Found' });
        };

        return response
            .status(200)
            .send({ product });

    } catch(err) {
        return response
            .status(500)
            .send({error: 'Internal error when loading product'});
    }
};

exports.create = async (request, response) => {
    try {
        const { body } = request;
        const product = await mongoService.post(body, productModel);

        return response
            .status(200)
            .send({ product });
    } catch(err) {
        return response
            .status(500)
            .send({ error: "Internal error when creating product" });
    }
};

exports.update = async (request, response) => {
    try {
        const { id } = request.params;
        const { body } = request;

        const product = await mongoService.put(id, body, productModel);

        if (!product) {
            return response
                .status(404)
                .send({ message: 'Product Not Found' });
        };

        return response
            .status(200)
            .send({ product });
    } catch(err) {
        return response
            .status(500)
            .send({ error: "Internal error when updating product" });
    }
};

exports.delete = async (request, response) => {
    try {
        const { id } = request.params;
        
        const product = await mongoService.delete(id, productModel);

        if (!product) {
            return response
                .status(404)
                .send({ message: 'Product Not Found' });
        };

        return response
            .status(200)
            .send({ message: "The product has been deleted" });
    } catch(err) {
        return response
            .status(500)
            .send({ error: "Internal error when deleting product" });
    }
};