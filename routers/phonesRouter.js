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

router.get("/", (req, res) => {
    let { model } = req.query.model;

    PhoneModel.find({ model }, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result)
        }
    });
});

router.post("/", (req, res) => {
    const { model, price, color } = req.body;
    const newPhone = new PhoneModel({ model, price, color });
    newPhone.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send("ok");
        }
    })
});

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const { model, price, color } = req.body;
    await PhoneModel.findByIdAndUpdate(id, { model: model, price: price, color: color }, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send("phone updated");
        }
    })
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    PhoneModel.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("deleted");
        }
    })
});


module.exports = router;