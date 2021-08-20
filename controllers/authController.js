/*
Próxima tarefa: adicionar autenticação -> Basic Auth
Authorization: Basic dGhpYWdvOnRoaWFnb0AxMjM=
*/

const express = require('express');
const bcrypt = require('bcryptjs');

const Product  = require('../models/products');

const router = express.Router();

router.get('/',async (req,res) =>{
    try{
        const products = await Product.find();

        return res.send({products});

    } catch(err){
        return res.status(400).send({error: 'Error loading products'});
    }
});

router.get('/:id', async(req,res) => {
    try{
        const product = await Product.findById(req.params.productId);

        return res.send({product});

    } catch(err){
        return res.status(400).send({error: 'Error loading product'});
    }
});

router.post('/', async(req,res) => {
    try{
        const product = await Product.create(req.body);

        return res.send({product});

    } catch(err){
        return res.status(400).send({error: 'Error creating new product'});
    };
});

router.put('/:id', async(req,res) => {
    try{
        const {name, description, brand, price} = req.body;

        const product = await Product.findByIdAndUpdate(req.params.productId, {name, 
            description, brand, price}, {new: true});

        return res.send({product});

    } catch(err){
        return res.status(400).send({error: 'Error updating product'});
    };
});

router.delete('/:id', async(req,res) => {
    try{
        await Product.findByIdAndRemove(req.params.productId);

        return res.send('Produto deletado');

    } catch(err){
        return res.status(400).send({error: 'Error deleting product'});
    }
});


module.exports = app => app.use('/products', router);