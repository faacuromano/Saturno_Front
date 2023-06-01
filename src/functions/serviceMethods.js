import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function CreateService(service) {
  try {
    console.log(service);
    const response = await axios({
      url: `${baseUrl}/servicio`,
      method: "POST",
      data: JSON.stringify(service),
      headers: {
        "Content-Type": "application/json", // <- HERE
      },
    });
    return response;
  } catch (errors) {
    console.log(errors);
  }
}

export async function GetServiceByUsername(username) {
  try {
    const response = await axios({
      url: `${baseUrl}/serviciosDe/${username}`,
      method: "GET",
    });
    return response.data;
  } catch (errors) {
    console.log(errors);
  }
}
