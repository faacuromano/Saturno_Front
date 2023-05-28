import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('TEST-a1306846-3773-42d7-806e-ec8161f2315d');

const mercadopago = require("mercadopago");
require("dotenv").config();
// Creates a preference object

mercadopago.configure(
    {
        access_token: process.env.ACCESS_TOKEN,
    }
);

module.exports = {
    mercadopago
}