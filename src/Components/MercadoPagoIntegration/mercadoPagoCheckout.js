import axios from "axios";
import { payment } from "mercadopago";

// const baseUrl = process.env.REACT_APP_BASE_URL;


export async function RegisterPayment(preference) {
  const url = "https://api.mercadopago.com/preapproval";

  const body = preference
  
    const suscription = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer TEST-1363133089955810-051616-60e599c38c5e8cd051d5579312bd7ac6-754636012"
      }

    });
    
  return suscription.data;
}