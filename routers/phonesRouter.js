const express = require("express");
const { PhoneModel } = require("../Models");
const router = express.Router();

router.get("/", (req, res) => {
    PhoneModel.find({}, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    })
});

router.get("/:model", (req, res) => {
    const model = req.params.model;
    PhoneModel.findById(model, (err, result) =>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(result)
        }
    })
});

router.post("/", (req, res) => {
    const { model, price, color } = req.body;
    const newPhone = new PhoneModel ({ model, price, color});
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
    const putPhone = new PhoneModel ({ model, price, color});
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
    const id = req.params.id;
    PhoneModel.findByIdAndDelete(id, (err) =>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send("deleted");
        }
    })
});


module.exports = router;