const express = require('express');
const faker = require('faker');
const morgan = require('morgan')
const bodyParser = require("body-parser");

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));


require('dotenv/config');

const app_url = process.env.APP_URL;
const app_port = process.env.APP_PORT;
const app_prefix = process.env.APP_PREFIX;


app.get(`${app_prefix}/product`, (req, res) => {
    const product = {
        id: faker.datatype.number(),
        name: faker.name.findName(),
        image: faker.image.imageUrl(),
        address: faker.address.streetAddress() ,
        employer: faker.company.companyName()

    }
    res.send(product)
})

app.post(`${app_prefix}/product`, (req, res) => {
    const newProduct = req.body;

    console.log(newProduct);
    res.send(newProduct);
})
app.listen(app_port, () => {
    console.log('Server is running ' + app_url + ':' + app_port + app_prefix)

})



