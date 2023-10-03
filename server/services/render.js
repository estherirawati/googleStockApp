const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/stocks
    axios.get('[LINK APP ENGINE]/api/stocks')
        .then(function(response){
            res.render('index', { stocks : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_stock = (req, res) =>{
    res.render('add_stock');
}

exports.update_stock = (req, res) =>{
    axios.get(`[LINK APP ENGINE]/api/stocks?docId=${req.query.docId}`)
        .then(function(stockdata){
            res.render("update_stock", { stock : stockdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}