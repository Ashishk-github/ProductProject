const { Product } = require('../Models/index');

export default class ProductRepository {

    create(args) {
        return Product.create(args);
    }

    insertMany(args) {
        return Product.insertMany(args);
    }

    findAll() {
        return Product.find();
    }

    findOne(args) {
        return Product.findOne(args);
    }

    updateOne(args,condition){
        return Product.updateOne(args,condition);
    }

    find(args){
        return Product.find(args);
    }

    findOneById(args){
        return Product.findById(args._id);
    }

    delete(args) {
        return Product.findOneAndDelete(args);
    }

    upsert(conditions, update) {
        return Product.findOneAndUpdate(conditions, update); 
    }

    findByIdAndUpdate(id, update, options){
        return Product.findByIdAndUpdate(id, update, options); 
    }

    distinct() {
        return Product.distinct('name');
    }

    aggregate(args) {
        return Product.aggregate(args);
    }
}