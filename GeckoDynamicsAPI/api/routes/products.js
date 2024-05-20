var express = require('express');
var router = express.Router();

const products = [
    {
        Id: 1,
        Name: 'Hat',
        Brand: 'Nike',
        Note: 'This is a demo. The creator is Arie Gurin 05/19/24 for GECKO DYNAMICS Interview. ARIKG94IL@GMAIL.COM'
    },
    {
        Id: 2,
        Name: 'Shoes',
        Brand: 'Nike',
        Note: 'This is a demo. The creator is Arie Gurin 05/19/24 for GECKO DYNAMICS Interview. ARIKG94IL@GMAIL.COM'
    },
    {
        Id: 3,
        Name: 'Shoes',
        Brand: 'Adidas',
        Note: 'This is a demo. The creator is Arie Gurin 05/19/24 for GECKO DYNAMICS Interview. ARIKG94IL@GMAIL.COM'
    },
    {
        Id: 4,
        Name: 'Dress',
        Brand: 'The North Face',
        Note: 'This is a demo. The creator is Arie Gurin 05/19/24 for GECKO DYNAMICS Interview. ARIKG94IL@GMAIL.COM'
    },
    {
        Id: 5,
        Name: 'Men - Pants',
        Brand: 'lululemon',
        Note: 'This is a demo. The creator is Arie Gurin 05/19/24 for GECKO DYNAMICS Interview. ARIKG94IL@GMAIL.COM'
    },
    {
        Id: 6,
        Name: 'Women - Pants',
        Brand: 'lululemon',
        Note: 'This is a demo. The creator is Arie Gurin 05/19/24 for GECKO DYNAMICS Interview. ARIKG94IL@GMAIL.COM'
    },
    {
        Id: 7,
        Name: 'Coat',
        Brand: 'Columbia',
        Note: 'This is a demo. The creator is Arie Gurin 05/19/24 for GECKO DYNAMICS Interview. ARIKG94IL@GMAIL.COM'
    },
    {
        Id: 8,
        Name: 'Jacket',
        Brand: 'Columbia',
        Note: 'This is a demo. The creator is Arie Gurin 05/19/24 for GECKO DYNAMICS Interview. ARIKG94IL@GMAIL.COM'
    },
    {
        Id: 9,
        Name: 'Earings',
        Brand: 'Zara',
        Note: 'This is a demo. The creator is Arie Gurin 05/19/24 for GECKO DYNAMICS Interview. ARIKG94IL@GMAIL.COM'
    },
    {
        Id: 10,
        Name: 'Neckalce',
        Brand: 'ASOS',
        Note: 'This is a demo. The creator is Arie Gurin 05/19/24 for GECKO DYNAMICS Interview. ARIKG94IL@GMAIL.COM'
    }
];

router.get('/', (req, res, next) => {
    res.status(200).json(products);
});

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.Id === id);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.Id === id);

    if (productIndex !== -1) {
        const existingProduct = products[productIndex];
        const updatedProduct = {
            Id: id,
            Name: req.body.Name || existingProduct.Name,
            Brand: req.body.Brand || existingProduct.Brand,
            Note: existingProduct.Note  // I don't let the user to change the note on purpose to ensure my code doesn't get copy righted. 
        };

        products[productIndex] = updatedProduct;
        res.status(200).json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

router.post('/', (req, res, next) => {
    const newProduct = {
        Id: products.length + 1,
        Name: req.body.Name,
        Brand: req.body.Brand,
        Note: 'This is a demo. The creator is Arie Gurin 05/19/24 for GECKO DYNAMICS Interview. ARIKG94IL@GMAIL.COM'
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

module.exports = router;