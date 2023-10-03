const FirestoreClient = require('../database/firestoreClient')


// create and save new stock
exports.create = async (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }
    
    // new stock
    const stock = {
        docId: `${+new Date()}`,
        nama: `${req.body.nama}`,
        desc: `${req.body.desc}`,
        status: `${req.body.status}`
    }

    const save = async() => {
        await FirestoreClient.save('Stock', stock)
    }
    
    await save();
    res.redirect('/');
}


// find stock 

exports.find = (req, res) => {
    const docId = req.query.docId;
    const find = async() => {
        const stock = await FirestoreClient.read('Stock', docId);
        res.send(stock);
    }
    find();
}

// update a stock
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Data to update can not be empty!" });
    }

    const docId = req.params.docId;
    const data = req.body;

    const update = async() => {
        await FirestoreClient.update('Stock', docId, data);
        res.send({ message: "Stock was updated successfully." });
    }

    update();
}

// delete a stock
exports.delete = (req, res) => {
    const docId = req.params.docId;
    const remove = async() => {
        await FirestoreClient.delete('Stock', docId);
        res.send({ message: "Stock was deleted successfully!" });
    }

    remove();
}