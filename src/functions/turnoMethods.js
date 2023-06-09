import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function crearTurno(turno) {
  try {
    const response = await axios({
      url: `${baseUrl}/turno`,
      method: "POST",
      data: JSON.stringify(turno),
      headers: {
        "Content-Type": "application/json", // <- HERE
      },
    });
    return response;
  } catch (errors) {
    console.log(errors);
  }
}

export async function GetTurnosByUsername(username) {
  try {
    const response = await axios({
      url: `${baseUrl}/turnosDe/${username}`,
      method: "GET",
    });
    return response.data;
  } catch (errors) {
    console.log(errors);
  }
}
