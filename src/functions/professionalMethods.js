import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getProfessionals() {
  try {
    const response = await axios({
      url: `${baseUrl}/profesional`,
      method: "GET",
    });

    return response;
  } catch (errors) {
    console.log(errors);
  }
}

export async function GetByProfUsername(username) {
  try {
    const response = await axios({
      url: `${baseUrl}/Profesional/${username}`,
      method: "GET",
    });
    return response.data;
  } catch (errors) {
    console.log(errors);
  }
}

export async function RegisterProfessional(professional) {
  try {
    axios({
      url: `${baseUrl}/profesional`,
      method: "POST",
      data: JSON.stringify(professional),
      headers: {
        "Content-Type": "application/json", // <- HERE
      },
    });
  } catch (errors) {
    console.log(errors);
  }
}

export async function DeleteProfesional(username, token) {
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `${baseUrl}/profesional?username=${username}`,
      method: "DELETE",
    });
    return response;
  } catch (errors) {
    console.log("auth: ", errors);
  }
}

export async function editProfessional(username, data, token) {
  try {
    const response = await axios({
      url: `${baseUrl}/profesional/${username}`,
      method: "PUT",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", // <- HERE
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (errors) {
    console.log("auth: ", errors);
  }
}

export async function obtenerTurnos(data) {
  try {
    const response = await axios({
      url: `${baseUrl}/profesional/horarios/${data}`,
      method: "GET",
    });
    return response;
  } catch (errors) {
    console.log(errors);
  }
}
