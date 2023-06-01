import axios from "axios";
import { payment } from "mercadopago";

// const baseUrl = process.env.REACT_APP_BASE_URL;

const https = require('https');

// At instance level

export async function RegisterPayment(preference) {

  const instance = axios.create({
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
  });
  const url = "https://api.mercadopago.com/preapproval";

  const body = preference
  
    const suscription = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer APP_USR-2303800404167032-053121-7d6958f7ac334a6723eeaf0caf34f864-1387539311",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"

      }

    });
    
  return suscription.data;
}

export async function GetPreferenceId(preference) {
  const instance = axios.create({
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
  });
  const url = "https://api.mercadopago.com/preapproval/search";

  const body = preference
  
    const suscription = await axios.get(url, body, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer APP_USR-2303800404167032-053121-7d6958f7ac334a6723eeaf0caf34f864-1387539311"
      }

    });
    console.log(suscription.data)
  return suscription.data;
}