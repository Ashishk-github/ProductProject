const { ProductVariant } = require('../Models/index');

export default class ProductVariantRepository {

    create(args) {
        return ProductVariant.create(args);
    }

    insertMany(args) {
        return ProductVariant.insertMany(args);
    }

    findAll() {
        return ProductVariant.find();
    }

    findOne(args) {
        return ProductVariant.findOne(args);
    }

    update(condition){
        return ProductVariant.update(condition);
    }

    find(args){
        return ProductVariant.find(args);
    }

    findOneById(args){
        return ProductVariant.findById(args._id);
    }

    delete(args) {
        return ProductVariant.findOneAndDelete(args);
    }

    deleteMany(args) {
        return ProductVariant.deleteMany(args);
    }

    upsert(conditions, update) {
        return ProductVariant.findOneAndUpdate(conditions, update); 
    }

    findByIdAndUpdate(id, update, options){
        return ProductVariant.findByIdAndUpdate(id, update, options); 
    }

    distinct() {
        return ProductVariant.distinct('name');
    }

    aggregate(args) {
        return ProductVariant.aggregate(args);
    }
}