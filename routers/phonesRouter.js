const express = require("express");
const { PhonesModel } = require("../Models");
const router = express.Router();

router.get("/", (req, res) => {
    PhonesModel.find({}, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    })
});

router.get("/", (req, res) => {
    const model = req.query.model;
    PhonesModel.find({model}, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    })
});

router.post("/", (req, res) => {
    const { model, price, color } = req.body;
    const newPhone = new PhonesModel ({ model, price, color});
    newPhone.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send("ok");
        }
    })
});

router.put("/", (req, res) => {
    const { model, price, color } = req.body;
    const putPhone = new PhonesModel ({ model, price, color});
    const modelPhone = putPhone.find(item => item.model === model);
    modelPhone.model = model;
    modelPhone.price = price;
    modelPhone.color = color;
    modelPhone.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send("ok");
        }
    })
});

router.delete("/:id", (req, res) => {
    PhonesModel.findOneAndRemove("")
});