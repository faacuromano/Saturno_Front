import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function CreateService(service) {
  try {
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

export async function EditService(id, data) {
  try {
    const response = await axios({
      url: `${baseUrl}/servicio/${id}`,
      method: "PUT",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", // <- HERE
      },
    });
    return response.data;
  } catch (errors) {
    console.log(errors);
  }
}

export async function DeleteService(id) {
  try {
    const response = await axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE",
      },
      url: `${baseUrl}/servicio?id=${id}`,
      method: "DELETE",
    });
    return response.data;
  } catch (errors) {
    console.log(errors);
  }
}
