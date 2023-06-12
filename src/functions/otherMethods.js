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

export async function cambiarPassword(username, data) {
  console.log("back", username, data);
  try {
    const response = await axios({
      url: `${baseUrl}/usuario/updatePassword/${username}`,
      method: "PUT",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", // <- HERE
      },
    });
    return response;
  } catch (errors) {
    console.log(errors);
  }
}