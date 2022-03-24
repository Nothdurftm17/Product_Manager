const Product = require("../models/Product.model")

module.exports.testResponse = (req,res) => {
    res.json({message: "test response here!"})
}

module.exports.findAll = (req, res) => {
    Product.find({})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "Did not work", err}))
}

module.exports.create = (req, res) => {
    Product.create(req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "Did not work", err}))
}

module.exports.findOne = (req, res) => {
    Product.findOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "Did not work", err}))
}

module.exports.deleteOne = (req, res) => {
    Product.deleteOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "Did not work", err}))
}

module.exports.updateOne = (req, res) => {
    Product.updateOne({_id: req.params._id}, req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "Did not work", err}))
}
