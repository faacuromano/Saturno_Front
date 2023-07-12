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

export async function GetTurnos() {
  try {
    const response = await axios({
      url: `${baseUrl}/turno`,
      method: "GET",
    });
    return response.data;
  } catch (errors) {
    console.log(errors);
  }
}

export async function GetTurnosByUsername(username, estadoTurno) {
  try {
    const response = await axios({
      url: `${baseUrl}/turnosDe/${username}?estado=${estadoTurno}`,
      method: "GET",
    });
    return response.data;
  } catch (errors) {
    console.log(errors);
  }
}
