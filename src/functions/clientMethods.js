import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getClient() {
  try {
    const response = await axios({
      url: `${baseUrl}/usuario`,
      method: "GET",
    });

    return response;
  } catch (errors) {
    console.log(errors);
  }
}

export async function authClient(user, passw) {
  try {
    const response = await axios({
      url: `${baseUrl}/Usuario/login?username=${user}&password=${passw}`,
      method: "GET",
    });
    return response;
  } catch (errors) {
    console.log("auth: ", errors);
  }
}

export async function DeleteClient(id) {
  console.log("function: ", id);
  try {
    const response = await axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE",
      },
      url: `${baseUrl}/client/${id}`,
      method: "DELETE",
    });
    return response;
  } catch (errors) {
    console.log("auth: ", errors);
  }
}

export async function RegisterClient(client) {
  console.log("Register client ", client);
  try {
    axios({
      url: `${baseUrl}/Usuario`,
      method: "POST",
      data: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json", // <- HERE
      },
    });
    const listUser = getClient();
    console.log(listUser);
  } catch (errors) {
    console.log(errors);
  }
}

export async function editClient(id, data) {
  console.log("edit: ", id, data);
  try {
    const response = await axios({
      url: `${baseUrl}/Usuario/${id}`,
      method: "PUT",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", // <- HERE
      },
    });
    return response;
  } catch (errors) {
    console.log("auth: ", errors);
  }
}
