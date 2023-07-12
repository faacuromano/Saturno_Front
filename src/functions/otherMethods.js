import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function verficarEmail(username) {
  try {
    const response = await axios({
      url: `${baseUrl}/activarSubscripcion/${username}`,
      method: "PUT",
    });
    return response;
  } catch (errors) {
    console.log(errors);
  }
}

export async function cambiarPassword(username, data, token) {
  try {
    const response = await axios({
      url: `${baseUrl}/usuario/updatePassword/${username}`,
      method: "PUT",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", // <- HERE
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (errors) {
    console.log(errors);
  }
}

export function decryptToken(encryptedToken) {
  // Eliminar los asteriscos agregados
  let withoutAsterisks = encryptedToken.replaceAll("*", "");

  // Invertir el string
  let decryptedToken = withoutAsterisks.split("").reverse().join("");

  return decryptedToken;
}
